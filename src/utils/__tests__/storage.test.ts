import { getStorageItem } from 'src/utils/storage';
import { z } from 'zod';

describe('storage tests', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  const schema = z.object({
    name: z.string(),
    age: z.number(),
  });

  type Person = z.infer<typeof schema>;

  test(`Value doesn't exist`, () => {
    const result = getStorageItem({
      type: 'local',
      key: 'person',
      json: {
        schema,
      },
    });

    expect(result).toStrictEqual(null);
  });

  test(`Good value`, () => {
    const p: Person = {
      name: 'test',
      age: 12,
    };

    localStorage.setItem('person', JSON.stringify(p));

    const result = getStorageItem({
      type: 'local',
      key: 'person',
      json: {
        schema,
      },
    });

    expect(result).toStrictEqual(p);
  });

  test(`Value is invalid`, () => {
    const almostAPerson = {
      names: 'test',
      age: 12,
    };

    localStorage.setItem('person', JSON.stringify(almostAPerson));

    const result = getStorageItem({
      type: 'local',
      key: 'person',
      json: {
        schema,
      },
    });

    expect(result).toStrictEqual(null);
  });
});
