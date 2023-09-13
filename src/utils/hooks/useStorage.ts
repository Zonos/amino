import { useMemo, useSyncExternalStore } from 'react';

import {
  type StorageParams,
  type StorageType,
  getStorageItem,
  setStorageItem,
} from 'src/utils/storage';

type AminoLocalStorageKey = 'current-schema';

/** Storage key that's being used in Amino */
export type AminoStorageKey =
  | `amino:${AminoLocalStorageKey}`
  | (string & Record<never, never>);

const getStorageSubscription = (type: StorageType) => {
  const subscribe = (callback: () => void) => {
    /**
     * For external documents
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
     *
     * Session storage is not shared between tabs, so we don't need to worry about that
     */
    if (type === 'local') {
      window.addEventListener('storage', callback);
    }
    // Our internal event naming
    window.addEventListener(`amino:storage-${type}`, callback);
    return () => {
      if (type === 'local') {
        window.removeEventListener('storage', callback);
      }

      window.removeEventListener(`amino:storage-${type}`, callback);
    };
  };

  return subscribe;
};

export type UseStorageParams<
  TValue extends unknown,
  TKey extends AminoStorageKey,
> = StorageParams<TValue, TKey> & {
  defaultValue: TValue;
};
export const useStorage = <
  TValue extends unknown,
  TKey extends AminoStorageKey = AminoStorageKey,
>({
  defaultValue,
  json,
  key,
  schema,
  type,
}: UseStorageParams<TValue, TKey>) => {
  const subscribe = useMemo(() => getStorageSubscription(type), [type]);

  // The snapshot function is only used to trigger re-renders, so we need simple string equality comparison
  useSyncExternalStore(subscribe, () =>
    type === 'local' ? localStorage.getItem(key) : sessionStorage.getItem(key),
  );

  const currentValue =
    getStorageItem<TValue>({ json, key, schema, type }) || null;

  const setValue = (value: TValue) =>
    setStorageItem({ json, key, type, value });

  return { setValue, value: currentValue ?? defaultValue };
};
