import type {
  DeepPrev,
  DeepRecursionLimited,
  DeepRecursiveDepth,
} from 'src/types/deep/deep';

type Delimiter = '.';

// https://dev.to/pffigueiredo/typescript-utility-keyof-nested-object-2pa3
/**
 * Constructs a union of all possible keys with primitive values, with nested properties separated with a delimiter.
 *
 * Default recursion depth limit is 4.
 *
 * @example 'person.age'
 *
 */
export type DeepKeyof<
  T extends object,
  Depth extends DeepRecursiveDepth = 4,
> = DeepRecursionLimited<
  Depth,
  {
    [K in Extract<keyof T, string>]: T[K] extends Array<unknown>
      ? K
      : T[K] extends object
        ? `${K}${Delimiter}${DeepKeyof<T[K], DeepPrev[Depth]>}`
        : K;
  }[Extract<keyof T, string>]
>;

/**
 * Extracts a type for a field given a property path string.
 */
export type DeepPropertyType<
  T extends object,
  KeyPath extends DeepKeyof<T, Depth>,
  Depth extends DeepRecursiveDepth = 4,
> = DeepRecursionLimited<
  Depth,
  KeyPath extends `${infer Top}${Delimiter}${infer Rest}`
    ? Top extends keyof T
      ? T[Top] extends object
        ? Rest extends DeepKeyof<T[Top], DeepPrev[Depth]>
          ? DeepPropertyType<T[Top], Rest, DeepPrev[Depth]>
          : never
        : never
      : never
    : KeyPath extends keyof T
      ? T[KeyPath]
      : never
>;
