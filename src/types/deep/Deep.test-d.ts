/* eslint-disable @typescript-eslint/no-unused-vars */

import type { DeepReducerActions } from 'src/types/deep/DeepReducerActions';

// https://dev.to/ecyrbe/how-to-unit-test-your-typescript-utility-types-3cnm
type Assert<T, U> =
  (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2
    ? true
    : { error: 'Types are not equal'; type1: T; type2: U };

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

type Actual1 = DeepReducerActions<DeepObject, 5>;
type Expected1 =
  | {
      name: 'a.b.g';
      type: 'change';
      value: string;
    }
  | {
      name: 'a.b.c.d.e.f';
      type: 'change';
      value: number;
    };

const _t1: Assert<Actual1, Expected1> = true;

type Actual2 = DeepReducerActions<DeepObject>;
type Expected2 = {
  name: 'a.b.g';
  type: 'change';
  value: string;
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

type Actual3 = DeepReducerActions<BasicObject>;
type Expected3 =
  | {
      name: 'age';
      type: 'change';
      value: number;
    }
  | {
      name: 'name';
      type: 'change';
      value: string;
    }
  | {
      name: 'location.latitude';
      type: 'change';
      value: string;
    }
  | {
      name: 'location.longitude';
      type: 'change';
      value: string;
    }
  | {
      name: 'location.height';
      type: 'change';
      value: number;
    };

const _t3: Assert<Actual3, Expected3> = true;
