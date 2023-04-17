import { getStorageItem, setStorageItem, StorageType } from '../storage';
import { useSwr } from './useSwr';

type AminoLocalStorageKey = 'current-schema';

/** Storage key that's being used in Amino */
export type AminoStorageKey =
  | AminoLocalStorageKey
  | (string & Record<never, never>);

type Props<TValue extends unknown, TKey extends AminoStorageKey> = {
  type: StorageType;
  key: TKey;
  /**
   * @param json - If true, the value will be set/parsed as JSON
   * @default false
   */
  json?: boolean;
  defaultValue: TValue;
};

type Return<T> = [value: T, setValue: (value: T) => void];

export const useStorage = <
  TValue extends unknown,
  TKey extends AminoStorageKey = AminoStorageKey
>({
  defaultValue,
  key,
  type,
  json,
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
