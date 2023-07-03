import { mutate } from 'swr';
import type { Schema } from 'zod';

export type StorageType = 'session' | 'local';

export type StorageProps<Value, Key extends string = string> = {
  /**
   * @param json - If true, the value will be set/parsed as JSON
   * @default false
   */
  json?: boolean;
  key: Key;
  /**
   * Set the schema for runtime validation of values.
   * @default undefined
   */
  schema?: Schema<Value>;
  type: StorageType;
};

type SetProps<Value> = StorageProps<Value> & {
  value: Value;
};

export const getStorageItem = <Value extends unknown>({
  json = false,
  key,
  schema,
  type,
}: StorageProps<Value>): Value | null => {
  const storage = type === 'session' ? sessionStorage : localStorage;
  const rawValue = storage.getItem(key);

  if (!rawValue) return null;

  let value = rawValue;

  if (json) {
    try {
      value = JSON.parse(rawValue);
    } catch {
      return null;
    }
  }

  if (schema) {
    const parsed = schema.safeParse(value);

    if (!parsed.success) {
      return null;
    }

    return parsed.data;
  }

  return rawValue as Value;
};

export const setStorageItem = <Value extends unknown>({
  json,
  key,
  type,
  value,
}: SetProps<Value>): void => {
  const storage = type === 'session' ? sessionStorage : localStorage;

  const setValue = json ? JSON.stringify(value) : String(value);

  storage.setItem(key, setValue);

  mutate(key, value);
};
