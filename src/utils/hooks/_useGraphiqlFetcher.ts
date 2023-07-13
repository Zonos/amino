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
  customFetcher: HandleFetchFetcher | null;
  headers?: Record<string, string>;
  operationName?: string;
  query: string;
  url: string;
  variables?: string;
};

export const useGraphiqlFetcher = ({
  cachingKey,
  customFetcher,
  operationName,
  query,
  url,
  variables,
}: Props) => {
  const [resultData, setResultData] =
    useState<GraphiqlExecutionResult<ExecutionResultType> | null>(null);

  const fetcher = graphiqlFetcher({
    customFetcher,
    url,
  });

  const { data, isLoading } = useSwr(
    cachingKey,
    async () => {
      const result = await fetcher({
        operationName,
        query,
        variables: variables ? JSON.parse(variables) : undefined,
      });
      return { json: result };
    },
    {
      keepPreviousData: true,
    },
  );

  const gqlFetcher: GraphiqlFetcher = useMemo(
    () => async (params, options) => {
      const results = await mutate(
        url,
        async () => fetcher(params, options),
        false,
      );

      if (results) {
        setResultData(results);
      }
      return results || { data: null };
    },
    [fetcher, url],
  );

  useEffect(() => {
    if (data) {
      setResultData(data.json);
    }
  }, [data]);

  return { graphiqlFetcher: gqlFetcher, isLoading, resultData };
};
