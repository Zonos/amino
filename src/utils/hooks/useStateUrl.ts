import { useCallback, useState } from 'react';

import type { Schema } from 'zod';

type Params<Value> = {
  initialValue: Value;
  name: string;
  schema: Schema<Value>;
};

export const getCurrentStateUrl = <Value>({
  name,
  schema,
}: {
  name: string;
  schema: Schema<Value>;
}): Value | null => {
  const urlParams = new URLSearchParams(window.location.search);
  const rawValue = urlParams.get(name);

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

/**
 * Uses JSON.stringify. The caller is responsible for making the sure the value is serializable.
 */
export const setStateUrl = <Value>({
  name,
  value,
}: {
  name: string;
  value: Value | null;
}) => {
  const urlParams = new URLSearchParams(window.location.search);

  try {
    if (typeof value === 'object') {
      if (value === null || Object.keys(value).length === 0) {
        urlParams.delete(name);
        return;
      }
    }

    const valueToSet =
      typeof value === 'string' ? value : JSON.stringify(value);

    if (value === null) {
      urlParams.delete(name);
    } else {
      urlParams.set(name, valueToSet);
    }
  } finally {
    if (urlParams.toString() === '') {
      // Just remove the ? if there are no params
      const path = window.location.pathname || '/';
      const hash = window.location.hash || '';
      window.history.replaceState(null, '', path + hash);
    } else {
      const path = window.location.pathname || '/';
      const hash = window.location.hash || '';
      window.history.replaceState(
        null,
        '',
        `${path}?${urlParams.toString()}${hash}`,
      );
    }
  }
};

/**
 * Uses the URL params to store the state.
 *
 * Uses zod for validation.
 */
export const useStateUrl = <Value>({
  initialValue,
  name,
  schema,
}: Params<Value>): [Value | null, (newValue: Value | null) => void] => {
  const [state, _setState] = useState<Value | null>(
    getCurrentStateUrl({ name, schema }) || initialValue,
  );

  const setState = useCallback(
    (newValue: Value | null) => {
      setStateUrl({ name, value: newValue });
      _setState(newValue);
    },
    [name],
  );

  return [state, setState];
};
