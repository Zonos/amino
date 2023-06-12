import type { DocumentNode, ExecutionResult } from 'graphql';

import {
  type HandleFetchReturn,
  type RequestOptions,
  handleFetch,
} from './handleFetch';

type FetcherParams = {
  operationName?: string | null;
  query: string;
  variables?: Record<string, unknown>;
};

export type ExecutionResultType =
  | Record<string, unknown>
  | Record<string, unknown>[];

type FetcherOpts = {
  documentAST?: DocumentNode;
  headers?: { [key: string]: unknown };
};

export type GraphiqlExecutionResult<
  T extends ExecutionResultType = ExecutionResultType
> = {
  data: ExecutionResult<T, ExecutionResultType>['data'];
};

export type GraphiqlFetcher = (
  graphQLParams: FetcherParams,
  opts?: FetcherOpts
) => Promise<GraphiqlExecutionResult>;

export type HandleFetchFetcher = <
  ResponseBody extends unknown,
  RequestBody = unknown
>(
  url: string,
  _opts?: RequestOptions<ResponseBody, RequestBody> & {
    logRequestIfError?: boolean;
  }
) => Promise<HandleFetchReturn<ResponseBody>>;

type IFetcher = (props: {
  customFetcher: HandleFetchFetcher | null;
  url: string | null;
}) => GraphiqlFetcher;

/**
 * Graphiql fetcher to send a GraphQl request
 * @param url url to fetch
 */
export const graphiqlFetcher: IFetcher =
  ({ customFetcher, url }) =>
  async (params, options) => {
    if (!url || !params.query) {
      return { data: null };
    }

    const fetcher = customFetcher || handleFetch;
    const { json } = await fetcher<GraphiqlExecutionResult>(url, {
      method: 'POST',
      ...options,
      body: params,
      headers: {
        'content-type': 'application/json',
        ...options?.headers,
      },
    });

    return json || { data: null };
  };
