import { type StorageParams, getStorageItem, setStorageItem } from '../storage';
import { useSwr } from './useSwr';

type AminoLocalStorageKey = 'current-schema';

/** Storage key that's being used in Amino */
export type AminoStorageKey =
  | `amino:${AminoLocalStorageKey}`
  | (string & Record<never, never>);

export type UseStorageParams<
  TValue extends unknown,
  TKey extends AminoStorageKey,
> = StorageParams<TValue, TKey> & {
  defaultValue: TValue;
};

type Return<T> = [value: T, setValue: (value: T) => Promise<void>];

export const useStorage = <
  TValue extends unknown,
  TKey extends AminoStorageKey = AminoStorageKey,
>({
  defaultValue,
  json,
  key,
  schema,
  type,
}: UseStorageParams<TValue, TKey>): Return<TValue> => {
  // we don't need useSwrt here since we only use swr for caching the storage value
  const { data } = useSwr<TValue | null>(
    key,
    () => getStorageItem<TValue>({ json, key, schema, type }) || null,
  );

  const setValue = (value: TValue) =>
    setStorageItem({ json, key, type, value });

  return [data ?? defaultValue, setValue];
};
