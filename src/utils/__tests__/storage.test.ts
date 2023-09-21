import { z } from 'zod';

import { getStorageItem } from 'src/utils/storage';

describe('storage tests', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  const schema = z.object({
    age: z.number(),
    name: z.string(),
  });

  type Person = z.infer<typeof schema>;

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

    const stringSchema = z.enum(['day', 'night', 'midnight']);

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

    const stringSchema = z.enum(['day', 'night', 'midnight']);

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

    const stringSchema = z.enum(['day', 'night', 'midnight']);

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
});
