import dayjs from 'dayjs';
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
const getThisWeek = () => dayjs().endOf('week').format('YYYY-MM-DD');
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
  const storage =
    type === 'session' ? window.sessionStorage : window.localStorage;

  const valueToSet = typeof value === 'string' ? value : JSON.stringify(value);

  if (isClientSide && typeof valueToSet === 'string') {
    storage.setItem(key, valueToSet);
    storage.setItem(`${key}_update_after`, getThisWeek());
    await mutate(key, valueToSet, false);
  } else if (isClientSide) {
    storage.removeItem(key);
    storage.removeItem(`${key}_update_after`);
    await mutate(key, null, false);
  }

  // Dispatch our internal event
  window.dispatchEvent(new Event(`amino:storage-${type}`));

  await mutate(key, value);
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
    const updateAfterThisWeek = dayjs(storedUpdateAfter).endOf('week');
    return dayjs(getThisWeek()).isAfter(updateAfterThisWeek);
  }
  return true;
};
