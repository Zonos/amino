import { act, renderHook } from '@testing-library/react';
import { z } from 'zod';

import {
  getCurrentStateUrl,
  setStateUrl,
  useStateUrl,
} from 'src/utils/hooks/useStateUrl';

describe('getCurrentStateUrl', () => {
  test('string', () => {
    window.history.replaceState({}, '', '?key1=value1&key2=value2');
    const value = getCurrentStateUrl({
      name: 'key1',
      schema: z.string(),
    });

    expect(value).toBe('value1');
  });

  test('string (not found)', () => {
    window.history.replaceState({}, '', '?key1=value1&key2=value2');
    const value = getCurrentStateUrl({
      name: 'key3',
      schema: z.string(),
    });

    expect(value).toBeNull();
  });

  test('number', () => {
    window.history.replaceState({}, '', '?key1=1&key2=value2');
    const value = getCurrentStateUrl({
      name: 'key1',
      schema: z.number(),
    });

    expect(value).toBe(1);
  });

  test('boolean', () => {
    window.history.replaceState({}, '', '?key1=true&key2=value2');
    const value = getCurrentStateUrl({
      name: 'key1',
      schema: z.boolean(),
    });

    expect(value).toBe(true);
  });

  test('boolean (false)', () => {
    window.history.replaceState({}, '', '?key1=true&key2=value2');
    const value = getCurrentStateUrl({
      name: 'key1',
      schema: z.boolean(),
    });

    expect(value).toBe(true);
  });

  test('string (union)', () => {
    window.history.replaceState({}, '', '?key1=BANANa&key2=value2');
    const value = getCurrentStateUrl({
      name: 'key1',
      schema: z.enum(['ORANGE', 'APPLE', 'BANANA']),
    });

    expect(value).toBeNull();
  });
});

describe('setStateUrl', () => {
  test('string', () => {
    setStateUrl({
      name: 'key1',
      value: 'value3',
    });

    const value = new URLSearchParams(window.location.search).get('key1');

    expect(value).toBe('value3');
  });

  test('removing', () => {
    window.history.replaceState({}, '', '?key1=value1&key2=value2');
    setStateUrl({
      name: 'key1',
      value: null,
    });

    const value = new URLSearchParams(window.location.search).get('key1');

    expect(value).toBeNull();
    expect(window.location.search).toBe('?key2=value2');
  });

  test('number', () => {
    setStateUrl({
      name: 'key1',
      value: 456,
    });

    const value = new URLSearchParams(window.location.search).get('key1');

    expect(value).toBe('456');
  });

  test('boolean', () => {
    setStateUrl({
      name: 'key1',
      value: true,
    });

    const value = new URLSearchParams(window.location.search).get('key1');

    expect(value).toBe('true');
  });

  test('array', () => {
    setStateUrl({
      name: 'key1',
      value: [1, 2, 3],
    });

    const value = new URLSearchParams(window.location.search).get('key1');

    expect(value).toBe('[1,2,3]');
  });

  test('array (empty)', () => {
    setStateUrl({
      name: 'key1',
      value: [],
    });

    const value = new URLSearchParams(window.location.search).get('key1');

    expect(value).toBeNull();
  });

  test('object', () => {
    setStateUrl({
      name: 'key1',
      value: {
        3: false,
        a: 1,
        b: 2,
      },
    });

    const value = new URLSearchParams(window.location.search).get('key1');

    expect(value).toBe('{"3":false,"a":1,"b":2}');
  });
});

describe('useStateUrl', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '?');
  });

  test('simple string', () => {
    const { result } = renderHook(() =>
      useStateUrl<string | null>({
        initialValue: null,
        name: 'filterText',
        schema: z.string(),
      }),
    );

    const setState = result.current[1];

    const getCurrentValue = () => result.current[0];

    expect(getCurrentValue()).toBeNull();

    act(() => {
      setState('orange');
    });

    expect(getCurrentValue()).toBe('orange');
    expect(window.location.search).toBe('?filterText=orange');

    act(() => {
      setState(null);
    });

    expect(getCurrentValue()).toBeNull();
    expect(window.location.search).toBe('');
  });

  test('starting value', () => {
    window.history.replaceState({}, '', '?filterText=apple');

    const { result } = renderHook(() =>
      useStateUrl<string | null>({
        initialValue: null,
        name: 'filterText',
        schema: z.string(),
      }),
    );

    const setState = result.current[1];

    const getCurrentValue = () => result.current[0];

    expect(getCurrentValue()).toBe('apple');

    act(() => {
      setState('orange');
    });

    expect(getCurrentValue()).toBe('orange');

    act(() => {
      setState(null);
    });

    expect(getCurrentValue()).toBeNull();
    expect(window.location.search).toBe('');
  });

  test('array', () => {
    const { result } = renderHook(() =>
      useStateUrl<number[]>({
        initialValue: [],
        name: 'numbers',
        schema: z.array(z.number()),
      }),
    );

    const setState = result.current[1];

    const getCurrentValue = () => result.current[0];

    expect(getCurrentValue()).toStrictEqual([]);

    act(() => {
      setState([1, 2, 3]);
    });

    expect(getCurrentValue()).toStrictEqual([1, 2, 3]);

    act(() => {
      setState(null);
    });

    expect(getCurrentValue()).toBeNull();
    expect(window.location.search).toBe('');
  });
});
