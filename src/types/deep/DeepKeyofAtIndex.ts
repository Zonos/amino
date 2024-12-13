import type {
  DeepPrev,
  DeepRecursionLimited,
  DeepRecursiveDepth,
} from 'src/types/deep/deep';

type DeepKeyofObjAndArray<
  T extends object,
  Depth extends DeepRecursiveDepth = 4,
> = DeepRecursionLimited<
  Depth,
  {
    [K in Extract<keyof T, string>]: T[K] extends unknown[]
      ? T[K][number] extends object
        ? `${K}[number].${DeepKeyofObjAndArray<T[K][number], DeepPrev[Depth]>}`
        : `${K}[number]`
      : T[K] extends object
        ? `${K}.${DeepKeyofObjAndArray<T[K], DeepPrev[Depth]>}`
        : K;
  }[Extract<keyof T, string>]
>;

export type DeepKeyofAtIndex<
  T extends object,
  Depth extends DeepRecursiveDepth = 4,
> = {
  [Path in DeepKeyofObjAndArray<
    T,
    Depth
  >]: Path extends `${string}[number]${string}`
    ? Path
    : Path extends `${string}[number]`
      ? Path
      : never;
}[DeepKeyofObjAndArray<T, Depth>];

/**
 * Extracts a type for a field given a property path string.
 */
export type DeepPropertyTypeAtIndex<
  T extends object,
  KeyPath extends DeepKeyofObjAndArray<T, Depth>,
  Depth extends DeepRecursiveDepth = 4,
> = DeepRecursionLimited<
  Depth,
  KeyPath extends `${infer Top}.${infer Rest}`
    ? Top extends `${infer ArrayField}[number]`
      ? ArrayField extends keyof T
        ? T[ArrayField] extends unknown[]
          ? T[ArrayField][number] extends object
            ? Rest extends DeepKeyofObjAndArray<
                T[ArrayField][number],
                DeepPrev[Depth]
              >
              ? DeepPropertyTypeAtIndex<
                  T[ArrayField][number],
                  Rest,
                  DeepPrev[Depth]
                >
              : never
            : never
          : never
        : never
      : Top extends keyof T
        ? T[Top] extends object
          ? Rest extends DeepKeyofObjAndArray<T[Top], DeepPrev[Depth]>
            ? DeepPropertyTypeAtIndex<T[Top], Rest, DeepPrev[Depth]>
            : never
          : never
        : never
    : KeyPath extends `${infer ArrayField}[number]`
      ? ArrayField extends keyof T
        ? T[ArrayField] extends unknown[]
          ? T[ArrayField][number]
          : never
        : never
      : KeyPath extends keyof T
        ? T[KeyPath]
        : never
>;
