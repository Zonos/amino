import { act, renderHook } from '@testing-library/react-hooks';
import { z } from 'zod';

import { useStorage } from 'src/utils/hooks/useStorage';

describe('useStorage', () => {
  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  test('should set an array of strings', async () => {
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

    await act(async () => {
      await setValue(['John']);
    });

    // Assert the updated state
    expect(getCurrentValue()).toStrictEqual(['John']);

    // Manually mangle local storage
    await act(async () => {
      await setValue('ooga-booga' as unknown as string[]);
    });

    expect(getCurrentValue()).toStrictEqual([]);
  });

  test('should set a complex object', async () => {
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

    await act(async () => {
      await setValue({
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
    await act(async () => {
      await setValue('ooga-booga' as unknown as z.infer<typeof person>);
    });

    expect(getCurrentValue()).toBeNull();
  });

  test('Should validate a string union without a json parse', async () => {
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

    await act(async () => {
      await setValue('banana');
    });

    // Assert the updated state
    expect(getCurrentValue()).toBe('banana');

    // Manually mangle local storage
    await act(async () => {
      await setValue('ooga-booga' as unknown as z.infer<typeof fruit>);
    });

    expect(getCurrentValue()).toBe('apple');
  });

  test('Should parse a boolean without a schema', async () => {
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

    await act(async () => {
      await setValue(true);
    });

    // Assert the updated state
    expect(getCurrentValue()).toBe(true);

    // Manually mangle local storage
    await act(async () => {
      await setValue('ooga-booga' as unknown as boolean);
    });

    expect(getCurrentValue()).toBe(false);
  });
});
