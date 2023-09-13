import { mutate } from 'swr';
import type { Schema } from 'zod';

export type StorageType = 'session' | 'local';

export type StorageParams<Value, Key extends string = string> = {
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

type SetParams<Value> = Omit<StorageParams<Value>, 'schema'> & {
  value: Value;
};

export const getStorageItem = <Value extends unknown>({
  json = false,
  key,
  schema,
  type,
}: StorageParams<Value>): Value | null => {
  const storage = type === 'session' ? sessionStorage : localStorage;
  const rawValue = storage.getItem(key);

  if (!rawValue) return null;

  if (json) {
    let parsedJson: unknown;

    try {
      parsedJson = JSON.parse(rawValue);
    } catch {
      return null;
    }

    if (schema) {
      const parsed = schema.safeParse(parsedJson);

      if (!parsed.success) {
        return null;
      }

      return parsed.data;
    }

    return parsedJson as Value;
  }

  // Could be a string union, in which case JSON parsing is unnecessary
  if (schema) {
    const parsed = schema.safeParse(rawValue);

    if (!parsed.success) {
      return null;
    }

    return parsed.data;
  }

  return rawValue as Value;
};

export const setStorageItem = async <Value extends unknown>({
  json,
  key,
  type,
  value,
}: SetParams<Value>) => {
  const storage = type === 'session' ? sessionStorage : localStorage;

  const setValue = json ? JSON.stringify(value) : String(value);

  storage.setItem(key, setValue);

  await mutate(key, value);
};
