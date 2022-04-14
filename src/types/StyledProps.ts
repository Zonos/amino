/**
 * Type that is used for StyledComponent to not render property in DOM, convert key to format: "$" + key
 * @desc The types do not build unless you use relative path for import
 * @example import { StyledComponent } from '../../types';
 */
export type StyledProps<T, U = 'className'> = {
  [Property in keyof T as `$${string &
    Exclude<Property, U | 'className'>}`]?: T[Property];
};
