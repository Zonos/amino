import Fuse from 'fuse.js';

export const getFuzzySearch = <T>({
  array,
  index,
  options,
}: {
  array: T[];
  index?: Fuse.FuseIndex<T>;
  options?: Fuse.IFuseOptions<T>;
}) => {
  const fuzzySearch = new Fuse(array, options, index);
  return { fuzzySearch };
};
