import { mutate } from 'swr';
import type { Schema } from 'zod';

export type StorageType = 'session' | 'local';

export type StorageProps<Value> = {
  type: StorageType;
  key: string;
  /**
   * @param json - If true, the value will be set/parsed as JSON
   * Set the schema for runtime validation of values.
   * @default undefined
   */
  json?: {
    schema: Schema<Value>;
  };
};

type SetProps<Value> = StorageProps<Value> & {
  value: Value;
};

export const getStorageItem = <Value extends unknown>({
  type,
  key,
  json,
}: StorageProps<Value>): Value | null => {
  const storage = type === 'session' ? sessionStorage : localStorage;
  const rawValue = storage.getItem(key);

  if (!rawValue) return null;

  if (json) {
    try {
      const value = JSON.parse(rawValue);

      const parsed = json.schema.safeParse(value);

      if (!parsed.success) {
        return null;
      }

      return parsed.data;
    } catch {
      return null;
    }
  }

  return rawValue as Value;
};

export const setStorageItem = <Value extends unknown>({
  type,
  key,
  json,
  value,
}: SetProps<Value>): void => {
  const storage = type === 'session' ? sessionStorage : localStorage;

  const setValue = json ? JSON.stringify(value) : String(value);

  storage.setItem(key, setValue);

  mutate(key, value);
};
