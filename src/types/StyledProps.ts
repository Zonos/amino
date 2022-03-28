/** Type that is used for StyledComponent to not render property in DOM, convert key to format: "$" + key */
export type StyledProps<T, U = 'className'> = {
  [Property in keyof T as `$${string &
    Exclude<Property, U | 'className'>}`]?: T[Property];
};
