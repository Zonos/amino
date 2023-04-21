import isEqual from 'lodash/isEqual';
import type { FetcherError, SwrtParams } from 'src/types';
import useSwr, { type Fetcher, type Key, type SWRConfiguration } from 'swr';

type UseSwrArgs<ResponseData> =
  | readonly [Key]
  | readonly [Key, Fetcher<SwrtParams<ResponseData>> | null]
  | readonly [
      Key,
      SWRConfiguration<SwrtParams<ResponseData>, FetcherError> | undefined
    ]
  | readonly [
      Key,
      Fetcher<SwrtParams<ResponseData>> | null,
      SWRConfiguration<SwrtParams<ResponseData>, FetcherError> | undefined
    ];

type MergedArgs<ResponseData> = readonly [
  Key,
  (
    | SWRConfiguration<SwrtParams<ResponseData>, FetcherError>
    | Fetcher<SwrtParams<ResponseData>>
    | undefined
    | null
  ),
  SWRConfiguration<SwrtParams<ResponseData>, FetcherError> | undefined
];

type NormalizedArgs<ResponseData> = readonly [
  Key,
  Fetcher<SwrtParams<ResponseData>> | null,
  SWRConfiguration<SwrtParams<ResponseData>, FetcherError> | undefined
];

type ObjectArgs<ResponseData> = {
  key: NormalizedArgs<ResponseData>[0];
  fetcher: NormalizedArgs<ResponseData>[1];
  config: NormalizedArgs<ResponseData>[2];
};

const isSwrFetcher = <T>(
  arg: MergedArgs<T>[1]
): arg is Fetcher<SwrtParams<T>> => typeof arg === 'function';

/** SWR takes multiple function signatures, so here we convert them to a consistent format for usage. This logic is taken mostly from their source. */
const normalizeArguments = <T>(...args: UseSwrArgs<T>): NormalizedArgs<T> =>
  isSwrFetcher<T>(args[1])
    ? ([args[0], args[1], args[2] || {}] as const)
    : ([args[0], null, (args[1] === null ? args[2] : args[1]) || {}] as const);

const asObject = <T>(args: NormalizedArgs<T>): ObjectArgs<T> => ({
  key: args[0],
  fetcher: args[1],
  config: args[2],
});

/**
 * @desc This is a wrapper for `useSwr` which requires that `ResponseData` generic is used.
 * @hint If data is `unknown` add the required generic
 * @example
 * const { data: products } = useSwrt<StoreProduct[]>(
 *  () => `/api/store/v1/store/${store.id}/products`,
 *   fetcher
 * );
 */
export const useSwrt = <ResponseData = unknown>(
  ...params: UseSwrArgs<ResponseData>
) => {
  const args = asObject(normalizeArguments<ResponseData>(...params));

  const mergedArgs: ObjectArgs<ResponseData> = {
    ...args,
    config: {
      compare: (a, b) => isEqual(a?.json, b?.json),
      ...args.config,
    },
  };

  return useSwr<SwrtParams<ResponseData>, FetcherError>(
    mergedArgs.key,
    mergedArgs.fetcher,
    mergedArgs.config
  );
};