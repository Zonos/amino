import dayjs, { type Dayjs } from 'dayjs';
import { z } from 'zod';

import type { SafeParseSchema } from 'src/types/SafeParseSchema';

export type StorageType = 'session' | 'local';

export type StorageParams<Value, Key extends string = string> = {
  key: Key;
  /**
   * Set the schema for runtime validation of values.
   */
  schema: SafeParseSchema<Value>;
  type: StorageType;
};

type SetParams<Value> = Omit<StorageParams<Value>, 'schema'> & {
  value: Value;
};
const isClientSide = typeof window !== 'undefined';

/**
 * Storage can be unavailable even on the client: `window.localStorage` is
 * `null` in Android WebViews with DOM storage disabled, and browsers that
 * block storage throw a `SecurityError` on access.
 */
const getStorage = (type: StorageType): Storage | null => {
  if (!isClientSide) return null;

  try {
    return type === 'local' ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
};

/** Read the raw string for a key, or `null` when storage is unavailable. */
export const getRawStorageItem = ({
  key,
  type,
}: Pick<StorageParams<unknown>, 'key' | 'type'>): string | null => {
  try {
    return getStorage(type)?.getItem(key) ?? null;
  } catch {
    return null;
  }
};

export const getStorageItem = <Value>({
  key,
  schema,
  type,
}: StorageParams<Value>): Value | null => {
  const rawValue = getRawStorageItem({ key, type });

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

export const setStorageItem = <Value>({
  key,
  type,
  value,
}: SetParams<Value>) => {
  if (!isClientSide) {
    throw new Error('Cannot set storage outside client');
  }

  const storage = getStorage(type);
  if (!storage) return;

  const valueToSet = typeof value === 'string' ? value : JSON.stringify(value);

  try {
    storage.setItem(key, valueToSet);
  } catch {
    // Blocked storage or exceeded quota
    return;
  }

  // Dispatch our internal event
  window.dispatchEvent(new Event(`amino:storage-${type}`));
};

export const setStorageItemWithLifetime = <Value>({
  key,
  lifetime,
  type,
  value,
}: SetParams<Value> & { lifetime: Dayjs }) => {
  if (!isClientSide) {
    throw new Error('Cannot set storage outside client');
  }

  const storage = getStorage(type);
  if (!storage) return;

  const valueToSet = typeof value === 'string' ? value : JSON.stringify(value);

  const valueIsTruthy = !!value;

  try {
    if (valueIsTruthy) {
      storage.setItem(key, valueToSet);
      storage.setItem(`${key}_update_after`, lifetime.format());
    } else {
      // Remove the item
      storage.removeItem(key);
      storage.removeItem(`${key}_update_after`);
    }
  } catch {
    // Blocked storage or exceeded quota
    return;
  }

  // Dispatch our internal event
  window.dispatchEvent(new Event(`amino:storage-${type}`));
};

export const getShouldUpdateStorageItem = <Value>({
  key,
  type,
}: StorageParams<Value>) => {
  const storedUpdateAfter = getStorageItem({
    key: `${key}_update_after`,
    schema: z.string(),
    type,
  });

  if (typeof storedUpdateAfter === 'string') {
    const updateAfterDate = dayjs(storedUpdateAfter);
    return dayjs().isAfter(updateAfterDate);
  }

  return true;
};
