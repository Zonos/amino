import { type DistributiveOmit } from '@emotion/react';

import type { DeepRecursiveDepth } from 'src/types/deep/deep';
import type { DeepReducerWithoutArrayActions } from 'src/types/deep/DeepReducerActions';
import { changeDeepProperty } from 'src/utils/changeDeepProperty';

type Person = {
  age: number;
  name: string;
};

type Group = {
  leader: Person;
  max: number;
  meta: {
    location: string;
  };
  people: Person[];
};

type ChangeDeepPropertyTest<
  T extends Record<string, unknown>,
  Depth extends DeepRecursiveDepth = 4,
> = {
  expected: T;
  input: {
    action: DistributiveOmit<DeepReducerWithoutArrayActions<T, Depth>, 'type'>;
    start: T;
  };
};

const baseGroup: Group = {
  leader: {
    age: 20,
    name: 'Jim',
  },
  max: 20,
  meta: {
    location: 'St. George',
  },
  people: [
    {
      age: 40,
      name: 'Jeff',
    },
    {
      age: 3,
      name: 'Mary',
    },
  ],
};

const groupTests: ChangeDeepPropertyTest<Group>[] = [
  {
    expected: { ...baseGroup, max: 3 },
    input: {
      action: {
        name: 'max',
        value: 3,
      },
      start: { ...baseGroup },
    },
  },
  {
    expected: { ...baseGroup, leader: { ...baseGroup.leader, age: 50 } },
    input: {
      action: {
        name: 'leader.age',
        value: 50,
      },
      start: { ...baseGroup },
    },
  },
  {
    expected: { ...baseGroup, meta: { ...baseGroup.meta, location: 'Alaska' } },
    input: {
      action: {
        name: 'meta.location',
        value: 'Alaska',
      },
      start: { ...baseGroup },
    },
  },
  {
    expected: {
      ...baseGroup,
      people: [...baseGroup.people, { age: 14, name: 'Mozart' }],
    },
    input: {
      action: {
        name: 'people',
        value: [...baseGroup.people, { age: 14, name: 'Mozart' }],
      },
      start: { ...baseGroup },
    },
  },
];

type SomeObject = {
  age: number;
  child: {
    colorType?: 'red' | 'blue' | 'green';
    description: string | null;
    vegan: boolean;
  };
  group: 'A' | 'B' | 'C';
  name: string;
};

const baseObj: SomeObject = {
  age: 20,
  child: {
    description: null,
    vegan: false,
  },
  group: 'A',
  name: 'Jim',
};

const pickupTests: ChangeDeepPropertyTest<SomeObject>[] = [
  {
    expected: {
      ...baseObj,
      child: {
        ...baseObj.child,
        description:
          'A very large 3 story brick building, with some lovely windows',
      },
    },
    input: {
      action: {
        name: 'child.description',
        value: 'A very large 3 story brick building, with some lovely windows',
      },
      start: { ...baseObj },
    },
  },
  // This field is optional and undefined at the start
  {
    expected: {
      ...baseObj,
      child: {
        ...baseObj.child,
        colorType: 'green',
      },
    },
    input: {
      action: {
        name: 'child.colorType',
        value: 'green',
      },
      start: { ...baseObj },
    },
  },
];

type DeepObject = {
  a: {
    b: {
      c: {
        d: {
          e: {
            depth6: {
              nope: boolean;
            };
            f: number;
          };
        };
      };
      g: string;
    };
  };
};

const baseDeepobject: DeepObject = {
  a: {
    b: {
      c: {
        d: {
          e: {
            depth6: {
              nope: false,
            },
            f: 3,
          },
        },
      },
      g: 'hey',
    },
  },
};

// We want to change properties with a depth greater than 4 here. Really this is a typing test, as the actual function can recurse forever.
const deepObjectTests: ChangeDeepPropertyTest<DeepObject, 5>[] = [
  {
    expected: {
      a: {
        b: {
          c: {
            d: {
              e: {
                depth6: {
                  nope: false,
                },
                f: 56,
              },
            },
          },
          g: 'hey',
        },
      },
    },
    input: {
      action: {
        name: 'a.b.c.d.e.f',
        value: 56,
      },
      start: { ...baseDeepobject },
    },
  },
  {
    expected: {
      a: {
        b: {
          c: {
            d: {
              e: {
                depth6: {
                  nope: false,
                },
                f: 3,
              },
            },
          },
          g: 'HELLO',
        },
      },
    },
    input: {
      action: {
        name: 'a.b.g',
        value: 'HELLO',
      },
      start: { ...baseDeepobject },
    },
  },
];

describe('changeNestedPropertiesRecursive finds and changes the correct fields', () => {
  // These are split because typescript doesn't like combining all the generics
  test.each(groupTests)('%o', ({ expected, input: { action, start } }) => {
    expect(
      changeDeepProperty({
        obj: start,
        propertyPath: action.name,
        value: action.value,
      }),
    ).toStrictEqual(expected);
  });

  test.each(pickupTests)('%o', ({ expected, input: { action, start } }) => {
    expect(
      changeDeepProperty({
        obj: start,
        propertyPath: action.name,
        value: action.value,
      }),
    ).toStrictEqual(expected);
  });

  describe('with a custom depth', () => {
    test.each(deepObjectTests)(
      '%o',
      ({ expected, input: { action, start } }) => {
        expect(
          changeDeepProperty<typeof start, typeof action.name, 5>({
            obj: start,
            propertyPath: action.name,
            value: action.value,
          }),
        ).toStrictEqual(expected);
      },
    );
  });
});
