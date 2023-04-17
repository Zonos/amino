/**
 * @desc adds _itemIndex for the item in the array
 * */
export const addIndex = <T extends Record<string, unknown>>(
  item: T,
  index: number
): T & { _itemIndex: number } => ({
  ...item,
  _itemIndex: index + 1,
});
