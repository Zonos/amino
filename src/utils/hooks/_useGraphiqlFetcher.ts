import { useEffect, useMemo, useState } from 'react';

import { mutate } from 'swr';

import {
  type ExecutionResultType,
  type GraphiqlExecutionResult,
  type GraphiqlFetcher,
  type HandleFetchFetcher,
  graphiqlFetcher,
} from '../_graphiqlFetcher';
import { useSwr } from './useSwr';

type Props = {
  // caching key (use cache if it's already loaded in swr)
  cachingKey: string;
  query: string;
  operationName?: string;
  variables?: string;
  customFetcher: HandleFetchFetcher | null;
  headers?: Record<string, string>;
  url: string;
};

export const useGraphiqlFetcher = ({
  cachingKey,
  query,
  operationName,
  variables,
  customFetcher,
  url,
}: Props) => {
  const [resultData, setResultData] =
    useState<GraphiqlExecutionResult<ExecutionResultType> | null>(null);

  const fetcher = graphiqlFetcher({
    url,
    customFetcher,
  });

  const { data, isLoading } = useSwr(
    cachingKey,
    async () => {
      const result = await fetcher({
        query,
        variables: variables ? JSON.parse(variables) : undefined,
        operationName,
      });
      return { json: result };
    },
    {
      keepPreviousData: true,
    }
  );

  const gqlFetcher: GraphiqlFetcher = useMemo(
    () => async (params, options) => {
      const results = await mutate(
        url,
        async () => fetcher(params, options),
        false
      );

      if (results) {
        setResultData(results);
      }
      return results || { data: null };
    },
    [fetcher, url]
  );

  useEffect(() => {
    if (data) {
      setResultData(data.json);
    }
  }, [data]);

  return { graphiqlFetcher: gqlFetcher, resultData, isLoading };
};
