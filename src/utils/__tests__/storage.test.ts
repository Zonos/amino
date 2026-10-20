import { z } from 'zod';

import { getStorageItem } from 'src/utils/storage';

const schema = z.object({
  age: z.number(),
  name: z.string(),
});

type Person = z.infer<typeof schema>;

describe('storage tests', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  test(`Value doesn't exist`, () => {
    const result = getStorageItem({
      key: 'person',
      schema,
      type: 'local',
    });

    expect(result).toBeNull();
  });

  test(`Good value`, () => {
    const p: Person = {
      age: 12,
      name: 'test',
    };

    localStorage.setItem('person', JSON.stringify(p));

    const result = getStorageItem({
      key: 'person',
      schema,
      type: 'local',
    });

    expect(result).toStrictEqual(p);
  });

  test(`Value is invalid`, () => {
    const almostAPerson = {
      age: 12,
      names: 'test',
    };

    localStorage.setItem('person', JSON.stringify(almostAPerson));

    const result = getStorageItem({
      key: 'person',
      schema,
      type: 'local',
    });

    expect(result).toBeNull();
  });

  test(`String enum`, () => {
    const value = 'day';

    const stringSchema = z.enum(['day', 'night']);

    localStorage.setItem('theme', value);

    const result = getStorageItem({
      key: 'theme',
      schema: stringSchema,
      type: 'local',
    });

    expect(result).toBe('day');
  });

  test(`String enum invalid`, () => {
    const value = 'twilight';

    const stringSchema = z.enum(['day', 'night']);

    localStorage.setItem('theme', value);

    const result = getStorageItem({
      key: 'theme',
      schema: stringSchema,
      type: 'local',
    });

    expect(result).toBeNull();
  });

  test(`String enum is not JSON stringified`, () => {
    const value = 'day';

    const stringSchema = z.enum(['day', 'night']);

    localStorage.setItem('theme', value);

    const rawValue = localStorage.getItem('theme');

    expect(rawValue).toBe('day');

    const result = getStorageItem({
      key: 'theme',
      schema: stringSchema,
      type: 'local',
    });

    expect(result).toBe('day');
  });

  test(`Accepts a zod 3 shaped schema`, () => {
    // zod 3's `safeParse` result shape, so consumers still on zod 3 type-check.
    const zod3Schema: {
      safeParse: (
        data: unknown,
        params?: { path?: (string | number)[] },
      ) =>
        | { data: Person; error?: never; success: true }
        | { data?: never; error: Error; success: false };
    } = {
      safeParse: data => {
        const parsed = schema.safeParse(data);
        return parsed.success
          ? { data: parsed.data, success: true }
          : { error: new Error('invalid'), success: false };
      },
    };

    const p: Person = { age: 12, name: 'test' };
    localStorage.setItem('person', JSON.stringify(p));

    const result: Person | null = getStorageItem({
      key: 'person',
      schema: zod3Schema,
      type: 'local',
    });

    expect(result).toStrictEqual(p);
  });
});
