export type StyledProps<T, U = 'className'> = {
  [Property in keyof T as `$${string &
    Exclude<Property, U | 'className'>}`]?: T[Property];
};
