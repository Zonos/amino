import { mutate } from 'swr';

export type StorageType = 'session' | 'local';

export type StorageProps = {
  type: StorageType;
  key: string;
  /**
   * @param json - If true, the value will be set/parsed as JSON
   * @default false
   */
  json?: boolean;
};

type SetProps<Value> = StorageProps & {
  value: Value;
};

export const getStorageItem = <Value extends unknown>({
  type,
  key,
  json,
}: StorageProps): Value | null => {
  const storage = type === 'session' ? sessionStorage : localStorage;
  const rawValue = storage.getItem(key);

  if (!rawValue) return null;

  if (json) {
    try {
      const value = JSON.parse(rawValue);
      return value as Value;
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
