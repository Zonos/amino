/**
 * Prefix props with `$` to prevent them from being passed to native element or component.
 * @link https://styled-components.com/docs/api#using-custom-props
 */
export type StyledProps<T, U = 'className'> = {
  [Property in keyof T as `$${string &
    Exclude<Property, U | 'className'>}`]?: T[Property];
};
