export type KeyValuePairType = {
  /** Key type from each item in `ConstantKeyValuePairsType` */
  key: string;
  /** Value type from each item im `ConstantKeyValuePairsType` */
  value: string;
};

/** @info Logic to generate customized comment for base on key/value of each constant */
export type ConstantCustomizedComment =
  | (({ key, value }: KeyValuePairType) => string | null)
  | null;

export type ConstantKeyValuePairsType = () => Record<
  KeyValuePairType['key'],
  KeyValuePairType['value']
>;
