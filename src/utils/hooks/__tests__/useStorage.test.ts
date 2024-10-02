import { act, renderHook } from '@testing-library/react';
import dayjs from 'dayjs';
import { z } from 'zod';

import { useStorage, useStorageWithLifetime } from 'src/utils/hooks/useStorage';

describe('useStorage', () => {
  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  test('should set an array of strings', () => {
    const { result } = renderHook(() =>
      useStorage({
        defaultValue: [],
        key: 'people-array',
        schema: z.array(z.string()),
        type: 'local',
      }),
    );

    const getCurrentValue = () => result.current.value;

    // Assert initial state
    const { setValue, value: initialValue } = result.current;

    expect(initialValue).toStrictEqual([]);

    act(() => {
      setValue(['John']);
    });

    // Assert the updated state
    expect(getCurrentValue()).toStrictEqual(['John']);

    // Manually mangle local storage
    act(() => {
      setValue('ooga-booga' as unknown as string[]);
    });

    expect(getCurrentValue()).toStrictEqual([]);
  });

  test('should set a complex object', () => {
    const person = z.object({
      age: z.number(),
      name: z.string(),
    });

    const { result } = renderHook(() =>
      useStorage({
        defaultValue: null,
        key: 'people-array',
        schema: person,
        type: 'session',
      }),
    );

    const getCurrentValue = () => result.current.value;

    // Assert initial state
    const { setValue, value: initialValue } = result.current;

    expect(initialValue).toBeNull();

    act(() => {
      setValue({
        age: 12,
        name: 'John',
      });
    });

    // Assert the updated state
    expect(getCurrentValue()).toStrictEqual({
      age: 12,
      name: 'John',
    });

    // Manually mangle local storage
    act(() => {
      setValue('ooga-booga' as unknown as z.infer<typeof person>);
    });

    expect(getCurrentValue()).toBeNull();
  });

  test('Should validate a string union without a json parse', () => {
    const fruit = z.enum(['apple', 'orange', 'banana']);

    const { result } = renderHook(() =>
      useStorage({
        defaultValue: 'apple',
        key: 'people-array',
        schema: fruit,
        type: 'local',
      }),
    );

    const getCurrentValue = () => result.current.value;

    // Assert initial state
    const { setValue, value: initialValue } = result.current;

    expect(initialValue).toBe('apple');

    act(() => {
      setValue('banana');
    });

    // Assert the updated state
    expect(getCurrentValue()).toBe('banana');

    // Manually mangle local storage
    act(() => {
      setValue('ooga-booga' as unknown as z.infer<typeof fruit>);
    });

    expect(getCurrentValue()).toBe('apple');
  });

  test('Should parse a boolean', () => {
    const boolean = z.boolean();

    const { result } = renderHook(() =>
      useStorage({
        defaultValue: false,
        key: 'boolean',
        schema: boolean,
        type: 'session',
      }),
    );

    const getCurrentValue = () => result.current.value;

    // Assert initial state
    const { setValue, value: initialValue } = result.current;

    expect(initialValue).toBe(false);

    act(() => {
      setValue(true);
    });

    // Assert the updated state
    expect(getCurrentValue()).toBe(true);

    // Manually mangle local storage
    act(() => {
      setValue('ooga-booga' as unknown as boolean);
    });

    expect(getCurrentValue()).toBe(false);
  });

  test('Should parse a boolean with default value true', () => {
    const boolean = z.boolean();

    const { result } = renderHook(() =>
      useStorage({
        defaultValue: true,
        key: 'boolean',
        schema: boolean,
        type: 'session',
      }),
    );

    const getCurrentValue = () => result.current.value;

    // Assert initial state
    const { setValue, value: initialValue } = result.current;

    expect(initialValue).toBe(true);

    act(() => {
      setValue(false);
    });

    // Assert the updated state
    expect(getCurrentValue()).toBe(false);

    // Manually mangle local storage
    act(() => {
      setValue('ooga-booga' as unknown as boolean);
    });

    expect(getCurrentValue()).toBe(true);
  });
});

describe('storage tests with lifetime', () => {
  test('expired lifetime', () => {
    const person = z.object({
      age: z.number(),
      name: z.string(),
    });

    const { rerender, result } = renderHook(() =>
      useStorageWithLifetime({
        defaultValue: null,
        key: 'people-array',
        lifetime: dayjs().add(4, 'days'),
        schema: person,
        type: 'session',
      }),
    );

    const getCurrentValue = () => result.current.value;

    // Assert initial state
    const { setValue, value: initialValue } = result.current;

    expect(initialValue).toBeNull();

    act(() => {
      setValue({
        age: 12,
        name: 'John',
      });
    });

    // Assert the updated state
    expect(getCurrentValue()).toStrictEqual({
      age: 12,
      name: 'John',
    });

    // Valid time
    vi.setSystemTime(dayjs().add(2, 'days').format());

    rerender();

    // Should still be valid
    expect(getCurrentValue()).toStrictEqual({
      age: 12,
      name: 'John',
    });

    // Fake time
    vi.setSystemTime(dayjs().add(1, 'weeks').format());

    rerender();

    // Should have expired and be null
    expect(getCurrentValue()).toBeNull();
  });
});
