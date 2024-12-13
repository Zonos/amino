/* eslint-disable @typescript-eslint/no-unused-vars */

import type { DeepReducerWithArrayActions } from 'src/types/deep/DeepReducerActions';

// https://dev.to/ecyrbe/how-to-unit-test-your-typescript-utility-types-3cnm
type Assert<T, U> =
  (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2
    ? true
    : { error: 'Types are not equal'; type1: T; type2: U };

type DeepObject = {
  a: {
    b: {
      c: [
        {
          d: number;
          f: string;
        },
      ];
      g: string;
      h: string[];
      k: number[];
    };
  };
};

type Actual1 = DeepReducerWithArrayActions<DeepObject, 4>;
type Expected1 =
  | {
      index: number;
      name: 'a.b.c[number].d';
      type: 'changeAtIndex';
      value: number;
    }
  | {
      index: number;
      name: 'a.b.c[number].f';
      type: 'changeAtIndex';
      value: string;
    }
  | {
      index: number;
      name: 'a.b.h[number]';
      type: 'changeAtIndex';
      value: string;
    }
  | {
      index: number;
      name: 'a.b.k[number]';
      type: 'changeAtIndex';
      value: number;
    };

const _t1: Assert<Actual1, Expected1> = true;

type Actual2 = DeepReducerWithArrayActions<DeepObject, 2>;
type Expected2 =
  | {
      index: number;
      name: 'a.b.h[number]';
      type: 'changeAtIndex';
      value: string;
    }
  | {
      index: number;
      name: 'a.b.k[number]';
      type: 'changeAtIndex';
      value: number;
    };

const _t2: Assert<Actual2, Expected2> = true;

type BasicObject = {
  age: number;
  location: {
    height: number;
    latitude: string;
    longitude: string;
  };
  name: string;
};

type Actual3 = DeepReducerWithArrayActions<BasicObject>;
type Expected3 = never;
/** No array found in the object, action will return never */
const _t3: Assert<Actual3, Expected3> = true;

type ObjectWithArray = {
  associatedIds: number[];
  deepData: [
    {
      deepObject: {
        key1: number;
        key2: string;
      };
      description: number;
    },
  ];
  meta: [
    {
      key: string;
      value: string | number;
    },
  ];
};
type Actual4 = DeepReducerWithArrayActions<ObjectWithArray>;
type Expected4 =
  | {
      index: number;
      name: 'associatedIds[number]';
      type: 'changeAtIndex';
      value: number;
    }
  | {
      index: number;
      name: 'meta[number].key';
      type: 'changeAtIndex';
      value: string;
    }
  | {
      index: number;
      name: 'meta[number].value';
      type: 'changeAtIndex';
      value: string | number;
    }
  | {
      index: number;
      name: 'deepData[number].description';
      type: 'changeAtIndex';
      value: number;
    }
  | {
      index: number;
      name: 'deepData[number].deepObject.key1';
      type: 'changeAtIndex';
      value: number;
    }
  | {
      index: number;
      name: 'deepData[number].deepObject.key2';
      type: 'changeAtIndex';
      value: string;
    };

const _t4: Assert<Actual4, Expected4> = true;
