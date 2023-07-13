/**
 * @desc Type guard to make sure the key is in obj
 * @note key will be turned to `keyof T` if the function return true
 * */
export const isKeyInObj = <
  T extends Record<string, unknown> = Record<string, unknown>,
  K extends keyof T = keyof T,
>(
  obj: T,
  key: string | number | symbol,
): key is K => key in obj;
