import dayjs, { type Dayjs } from 'dayjs';
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
const isClientSide = typeof window !== 'undefined';

export const getStorageItem = <Value extends unknown>({
  key,
  schema,
  type,
}: StorageParams<Value>): Value | null => {
  if (!isClientSide) return null;

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
  if (!isClientSide) {
    throw new Error('Cannot set storage outside client');
  }

  const storage =
    type === 'session' ? window.sessionStorage : window.localStorage;

  const valueToSet = typeof value === 'string' ? value : JSON.stringify(value);

  storage.setItem(key, valueToSet);

  // Dispatch our internal event
  window.dispatchEvent(new Event(`amino:storage-${type}`));
};

export const setStorageItemWithLifetime = async <Value extends unknown>({
  key,
  lifetime,
  type,
  value,
}: SetParams<Value> & { lifetime: Dayjs }) => {
  const storage =
    type === 'session' ? window.sessionStorage : window.localStorage;

  const valueToSet = typeof value === 'string' ? value : JSON.stringify(value);

  const valueIsTruthy = !!value;

  if (isClientSide) {
    if (valueIsTruthy) {
      storage.setItem(key, valueToSet);
      storage.setItem(`${key}_update_after`, lifetime.format('YYYY-MM-DD'));
    } else {
      // Remove the item
      storage.removeItem(key);
      storage.removeItem(`${key}_update_after`);
    }
  }

  // Dispatch our internal event
  window.dispatchEvent(new Event(`amino:storage-${type}`));
};

export const getShouldUpdateStorageItem = <Value extends unknown>({
  key,
  schema,
  type,
}: StorageParams<Value>) => {
  const storedUpdateAfter = getStorageItem({
    key: `${key}_update_after`,
    schema,
    type,
  });

  if (typeof storedUpdateAfter === 'string') {
    const updateAfterDate = dayjs(storedUpdateAfter);
    return dayjs().isAfter(updateAfterDate);
  }

  return true;
};
