import Fuse, { type FuseIndex, type IFuseOptions } from 'fuse.js';

export const getFuzzySearch = <T>({
  array,
  index,
  options,
}: {
  array: T[];
  index?: FuseIndex<T>;
  options?: IFuseOptions<T>;
}) => {
  const fuzzySearch = new Fuse(array, options, index);
  return { fuzzySearch };
};
