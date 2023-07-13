import type { JsonError, NoInfer } from 'src/types';

export type HandleFetchReturn<ResponseBody extends unknown> = {
  errors: JsonError[];
  json: NoInfer<ResponseBody> | null;
  response: Response | null;
};

export type FetcherReturn<ResponseBody extends unknown> = {
  json: NoInfer<ResponseBody> | null;
  response: Response | null;
};

const getResponseBody = async <ResponseBody extends unknown>({
  response,
  shouldLog = true,
  shouldThrow = false,
}: {
  response: Response;
  shouldLog?: boolean;
  shouldThrow?: boolean;
}) => {
  try {
    const json = await response.json();
    return json as ResponseBody;
  } catch (e) {
    if (shouldThrow) {
      throw e;
    }
    if (shouldLog) {
      // eslint-disable-next-line
      console.error(e);
    }
    return null;
  }
};

export const handleRequest = async <ResponseBody extends unknown>(
  url: string,
  options?: RequestInit,
): Promise<HandleFetchReturn<ResponseBody>> => {
  let response: Response;
  try {
    response = await fetch(url, options);
  } catch (e) {
    if (e instanceof Error) {
      return {
        errors: [{ message: e.message, type: 'unknown' }],
        json: null,
        response: null,
      };
    }
    const message = 'Fail to fetch';
    return {
      errors: [{ message, type: 'unknown' }],
      json: null,
      response: null,
    };
  }
  if (response.ok) {
    const data = await getResponseBody<ResponseBody>({ response });

    return {
      errors: [],
      json: data,
      response,
    };
  }

  const status = response.status.toString();

  try {
    const data = await getResponseBody<ResponseBody>({
      response,
      shouldThrow: true,
    });
    const message = JSON.stringify(data);
    return {
      errors: [{ message: `${status}: ${message}`, type: status }],
      json: null,
      response,
    };
  } catch (e) {
    const message = 'Unknown error';
    return {
      errors: [{ message: `${status}: ${message}`, type: status }],
      json: null,
      response: null,
    };
  }
};

export type RequestOptions<ResponseBody, RequestBody> = {
  body?: NoInfer<RequestBody>;
  testExpectedData?: (data: ResponseBody) => boolean;
} & Omit<RequestInit, 'body'>;

export const handleFetch = async <
  ResponseBody extends unknown,
  RequestBody = unknown,
>(
  url: string,
  _opts?: RequestOptions<ResponseBody, RequestBody> & {
    logRequestIfError?: boolean;
  },
): Promise<HandleFetchReturn<ResponseBody>> => {
  const { logRequestIfError, ...opts } = _opts || {};
  const body = opts.body && JSON.stringify(opts.body);

  const options = { ...opts, body };

  return handleRequest<ResponseBody>(url, options);
};

export const fetcher = async <
  ResponseBody extends unknown,
  RequestBody = unknown,
>(
  url: string,
  options?: RequestOptions<ResponseBody, RequestBody>,
): Promise<FetcherReturn<ResponseBody>> => {
  const { errors, json, response } = await handleFetch<
    ResponseBody,
    RequestBody
  >(url, options);

  const firstError = errors.find(Boolean);
  if (
    !response?.ok ||
    ['pollUntil', 'failedData'].includes(firstError?.type || '')
  ) {
    // eslint-disable-next-line no-throw-literal
    throw { errors, status: response?.status };
  }

  return { json, response };
};
