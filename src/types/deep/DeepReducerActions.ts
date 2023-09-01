import type { DeepRecursiveDepth } from 'src/types/deep/deep';
import type { DeepKeyof, DeepPropertyType } from 'src/types/deep/DeepKeyof';
import type {
  DeepKeyofAtIndex,
  DeepPropertyTypeAtIndex,
} from 'src/types/deep/DeepKeyofAtIndex';

/**
 * Default depth of 4
 */
export type DeepReducerActions<
  T extends object,
  Depth extends DeepRecursiveDepth = 4,
> =
  | DeepReducerWithoutArrayActions<T, Depth>
  | DeepReducerWithArrayActions<T, Depth>;

/**
 * Default depth of 4
 */
export type DeepReducerWithArrayActions<
  T extends object,
  Depth extends DeepRecursiveDepth = 4,
> = {
  [Name in DeepKeyofAtIndex<T, Depth>]: {
    index: number;
    name: Name;
    type: 'changeAtIndex';
    value: DeepPropertyTypeAtIndex<T, Name, Depth>;
  };
}[DeepKeyofAtIndex<T, Depth>];

export type DeepReducerWithoutArrayActions<
  T extends object,
  Depth extends DeepRecursiveDepth = 4,
> = {
  [Name in DeepKeyof<T, Depth>]: {
    name: Name;
    type: 'change';
    value: DeepPropertyType<T, Name, Depth>;
  };
}[DeepKeyof<T, Depth>];
