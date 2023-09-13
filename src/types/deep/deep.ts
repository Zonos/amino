// https://www.angularfix.com/2022/01/why-am-i-getting-instantiation-is.html

/** For depth limiting recursive types */
export type DeepPrev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export type DeepRecursiveDepth = DeepPrev[number];

export type DeepRecursionLimited<
  Depth extends DeepRecursiveDepth,
  T,
> = Depth extends never ? never : T;

/* Possible improvement if performance is slow:
@link - https://github.com/microsoft/TypeScript/issues/48552 is an almost identical use case as we have, with a fix by the creator of TypeScript himself */
