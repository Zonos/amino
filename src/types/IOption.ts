import { ReactNode } from 'react';

export interface IOption<V extends string = string> {
  icon?: ReactNode;
  isDisabled?: boolean;
  label: string;
  labelDescription?: string;
  value: V;
}
