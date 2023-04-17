import { DocumentNode, ExecutionResult } from 'graphql';

import { handleFetch, HandleFetchReturn, RequestOptions } from './handleFetch';

type FetcherParams = {
  query: string;
  operationName?: string | null;
  variables?: Record<string, unknown>;
};

export type ExecutionResultType =
  | Record<string, unknown>
  | Record<string, unknown>[];

type FetcherOpts = {
  headers?: { [key: string]: unknown };
  documentAST?: DocumentNode;
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
  url: string | null;
  customFetcher: HandleFetchFetcher | null;
}) => GraphiqlFetcher;

/**
 * Graphiql fetcher to send a GraphQl request
 * @param url url to fetch
 */
export const graphiqlFetcher: IFetcher =
  ({ url, customFetcher }) =>
  async (params, options) => {
    if (!url || !params.query) {
      return { data: null };
    }

    const fetcher = customFetcher || handleFetch;
    const { json } = await fetcher<GraphiqlExecutionResult>(url, {
      method: 'POST',
      ...options,
      headers: {
        'content-type': 'application/json',
        ...options?.headers,
      },
      body: params,
    });

    return json || { data: null };
  };
