/** Type that is used for StyledComponent to not render property in DOM, convert key to format: "$" + key */
export type StyledProps<T> = {
  [Property in keyof T as `$${string &
    Exclude<keyof T, 'className'>}`]?: T[Property];
};
