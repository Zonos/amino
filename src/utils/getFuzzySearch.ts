import Fuse from 'fuse.js';

export const getFuzzySearch = <T extends unknown>({
  array,
  options,
  index,
}: {
  array: T[];
  options?: Fuse.IFuseOptions<T>;
  index?: Fuse.FuseIndex<T>;
}) => {
  const fuzzySearch = new Fuse(array, options, index);
  return { fuzzySearch };
};
