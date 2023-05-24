import { Schema } from 'zod';

import { type StorageType, getStorageItem, setStorageItem } from '../storage';
import { useSwr } from './useSwr';

type AminoLocalStorageKey = 'current-schema';

/** Storage key that's being used in Amino */
export type AminoStorageKey =
  | `amino:${AminoLocalStorageKey}`
  | (string & Record<never, never>);

type Props<TValue extends unknown, TKey extends AminoStorageKey> = {
  defaultValue: TValue;
  /**
   * @param json - If true, the value will be set/parsed as JSON
   * Set the schema for runtime validation of values.
   * @default undefined
   */
  json?: {
    schema: Schema<TValue>;
  };
  key: TKey;
  type: StorageType;
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
  // we don't need wrapper swrt here since we only use swr for catching the storage value
  const { data } = useSwr<TValue | null>(
    key,
    () => getStorageItem<TValue>({ type, key, json }) || null
  );

  const setValue = (value: TValue) =>
    setStorageItem({ type, key, value, json });

  return [data ?? defaultValue, setValue];
};
