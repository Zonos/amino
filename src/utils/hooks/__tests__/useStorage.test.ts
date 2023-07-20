import { act, renderHook } from '@testing-library/react-hooks';
import { z } from 'zod';

import { useStorage } from 'src/utils/hooks/useStorage';

describe('useStorage', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test.only('should set an array of strings', async () => {
    const { result } = renderHook(() =>
      useStorage({
        defaultValue: [],
        json: true,
        key: 'people-array',
        schema: z.array(z.string()),
        type: 'local',
      }),
    );

    const getCurrentValue = () => result.current[0];

    // Assert initial state
    const [initialValue, setValue] = result.current;

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
        json: true,
        key: 'people-array',
        schema: person,
        type: 'local',
      }),
    );

    const getCurrentValue = () => result.current[0];

    // Assert initial state
    const [initialValue, setValue] = result.current;

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
});
