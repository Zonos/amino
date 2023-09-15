import { mutate } from 'swr';
import type { Schema } from 'zod';

export type StorageType = 'session' | 'local';

export type StorageParams<Value, Key extends string = string> = {
  key: Key;
  /**
   * Set the schema for runtime validation of values.
   */
  schema: Schema<Value>;
  type: StorageType;
};

type SetParams<Value> = Omit<StorageParams<Value>, 'schema'> & {
  value: Value;
};

export const getStorageItem = <Value extends unknown>({
  key,
  schema,
  type,
}: StorageParams<Value>): Value | null => {
  if (typeof window === 'undefined') return null;

  const storage =
    type === 'local' ? window.localStorage : window.sessionStorage;
  const rawValue = storage.getItem(key);

  if (!rawValue) return null;

  try {
    const parsedJson = JSON.parse(rawValue);

    const parsed = schema.safeParse(parsedJson);

    if (!parsed.success) {
      return null;
    }

    return parsed.data;
  } catch {
    // String case
    const parsed = schema.safeParse(rawValue);

    if (!parsed.success) {
      return null;
    }

    return parsed.data;
  }
};

export const setStorageItem = async <Value extends unknown>({
  key,
  type,
  value,
}: SetParams<Value>) => {
  const storage =
    type === 'session' ? window.sessionStorage : window.localStorage;

  const valueToSet = typeof value === 'string' ? value : JSON.stringify(value);

  storage.setItem(key, valueToSet);

  // Dispatch our internal event
  window.dispatchEvent(new Event(`amino:storage-${type}`));

  await mutate(key, value);
};
