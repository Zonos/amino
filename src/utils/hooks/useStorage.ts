import { type StorageProps, getStorageItem, setStorageItem } from '../storage';
import { useSwr } from './useSwr';

type AminoLocalStorageKey = 'current-schema';

/** Storage key that's being used in Amino */
export type AminoStorageKey =
  | `amino:${AminoLocalStorageKey}`
  | (string & Record<never, never>);

type Props<TValue extends unknown, TKey extends AminoStorageKey> = StorageProps<
  TValue,
  TKey
> & {
  defaultValue: TValue;
};

type Return<T> = [value: T, setValue: (value: T) => void];

export const useStorage = <
  TValue extends unknown,
  TKey extends AminoStorageKey = AminoStorageKey
>({
  defaultValue,
  json,
  key,
  type,
}: Props<TValue, TKey>): Return<TValue> => {
  // we don't need useSwrt here since we only use swr for caching the storage value
  const { data } = useSwr<TValue | null>(
    key,
    () => getStorageItem<TValue>({ type, key, json }) || null
  );

  const setValue = (value: TValue) =>
    setStorageItem({ type, key, value, json });

  return [data ?? defaultValue, setValue];
};
