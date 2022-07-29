type Invalid<T extends string = string> = {
  message: T;
};

export const constraintAminoVar = <
  T extends Record<`--amino-${string}`, string>
>(object: {
  [P in keyof T]: T[P];
}) => object;

export const constraintDefinedAminoVar = <
  U extends object,
  T extends Record<string, string> = Record<string, string>
>(
  _match: U,
  object: Exclude<
    {
      [P in keyof T]: P extends keyof U
        ? T[P]
        : Invalid<`Key need to match keys of the object passed in the first argument`>;
    },
    Invalid
  >
) => object;
