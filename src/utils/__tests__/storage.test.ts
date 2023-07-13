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
      json: true,
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
      json: true,
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
      json: true,
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
});
