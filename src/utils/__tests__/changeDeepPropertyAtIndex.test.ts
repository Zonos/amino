import type { DistributiveOmit } from '@emotion/react';

import type { DeepRecursiveDepth } from 'src/types/deep/deep';
import type { DeepReducerWithArrayActions } from 'src/types/deep/DeepReducerActions';
import { changeDeepPropertyAtIndex } from 'src/utils/changeDeepPropertyAtIndex';

type Group = {
  hsCodes: string[];
  measurements: {
    source: 'API_REQUEST' | 'CATALOG' | 'ORGANIZATION_SETTING';
    type: 'HEIGHT' | 'LENGTH' | 'WEIGHT' | 'WIDTH';
    unitOfMeasure:
      | 'CENTIMETER'
      | 'FOOT'
      | 'GRAM'
      | 'INCH'
      | 'KILOGRAM'
      | 'METER'
      | 'MILLIMETER'
      | 'OUNCE'
      | 'POUND'
      | 'YARD';
    value: number;
  }[];
};

type UnitTest<
  T extends Record<string, unknown>,
  Depth extends DeepRecursiveDepth = 4,
> = {
  expected: T;
  input: {
    object: T;
    updateItem: DistributiveOmit<DeepReducerWithArrayActions<T, Depth>, 'type'>;
  };
};

describe('Make sure reducer works as expected', () => {
  const baseGroup: Group = {
    hsCodes: ['1952.99', '1546.22.4283'],
    measurements: [
      {
        source: 'API_REQUEST',
        type: 'WEIGHT',
        unitOfMeasure: 'INCH',
        value: 2,
      },
      {
        source: 'API_REQUEST',
        type: 'HEIGHT',
        unitOfMeasure: 'INCH',
        value: 6,
      },
    ],
  };

  const testCases: UnitTest<Group>[] = [
    {
      expected: {
        hsCodes: ['1952.99', '1546.22.4283'],
        measurements: [
          {
            source: 'API_REQUEST',
            type: 'WEIGHT',
            unitOfMeasure: 'INCH',
            value: 2,
          },
          {
            source: 'CATALOG',
            type: 'HEIGHT',
            unitOfMeasure: 'INCH',
            value: 6,
          },
        ],
      },
      input: {
        object: baseGroup,
        updateItem: {
          index: 1,
          name: 'measurements[number].source',
          value: 'CATALOG',
        },
      },
    },
    {
      expected: {
        hsCodes: ['1952.99', '1546.22.4283'],
        measurements: [
          {
            source: 'CATALOG',
            type: 'WEIGHT',
            unitOfMeasure: 'INCH',
            value: 2,
          },
          {
            source: 'API_REQUEST',
            type: 'HEIGHT',
            unitOfMeasure: 'INCH',
            value: 6,
          },
        ],
      },
      input: {
        object: baseGroup,
        updateItem: {
          index: 0,
          name: 'measurements[number].source',
          value: 'CATALOG',
        },
      },
    },
    {
      expected: {
        hsCodes: ['1952.99', '1546.22.4283'],
        measurements: [
          {
            source: 'API_REQUEST',
            type: 'WEIGHT',
            unitOfMeasure: 'INCH',
            value: 2,
          },
          {
            source: 'API_REQUEST',
            type: 'HEIGHT',
            unitOfMeasure: 'INCH',
            value: 99,
          },
        ],
      },
      input: {
        object: baseGroup,
        updateItem: {
          index: 1,
          name: 'measurements[number].value',
          value: 99,
        },
      },
    },
    {
      expected: {
        hsCodes: ['1952.99', '1234.56'],
        measurements: [
          {
            source: 'API_REQUEST',
            type: 'WEIGHT',
            unitOfMeasure: 'INCH',
            value: 2,
          },
          {
            source: 'API_REQUEST',
            type: 'HEIGHT',
            unitOfMeasure: 'INCH',
            value: 6,
          },
        ],
      },
      input: {
        object: baseGroup,
        updateItem: {
          index: 1,
          name: 'hsCodes[number]',
          value: '1234.56',
        },
      },
    },
  ];

  test.each(testCases)(
    `Update path: "$input.updateItem.name" | Update value: $input.updateItem.value`,
    ({ expected, input }) => {
      expect(
        changeDeepPropertyAtIndex({
          index: input.updateItem.index,
          obj: input.object,
          propertyPath: input.updateItem.name,
          value: input.updateItem.value,
        }),
      ).toStrictEqual(expected);
    },
  );
});
