import { useMemo, useState } from 'react';

import { SwrtParams } from 'src/types';
import { mutate } from 'swr';

import {
  ExecutionResultType,
  GraphiqlExecutionResult,
  GraphiqlFetcher,
  graphiqlFetcher,
  HandleFetchFetcher,
} from '../_graphiqlFetcher';
import { useSwrt } from './useSwrt';

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
  const [, setResultData] = useState<SwrtParams<
    GraphiqlExecutionResult<ExecutionResultType>
  > | null>(null);

  const fetcher = graphiqlFetcher({
    url,
    customFetcher,
  });

  const { data, isLoading } = useSwrt<GraphiqlExecutionResult>(
    cachingKey,
    async () =>
      fetcher({
        query,
        variables: variables ? JSON.parse(variables) : undefined,
        operationName,
      }),
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
      return results || { json: { data: null }, errors: [], response: null };
    },
    [fetcher, url]
  );

  return { graphiqlFetcher: gqlFetcher, resultData: data, isLoading };
};
