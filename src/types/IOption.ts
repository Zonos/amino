import type { ReactNode } from 'react';

export interface IOption<V extends string | number = string | number> {
  icon?: ReactNode;
  isDisabled?: boolean;
  label: string;
  labelDescription?: string;
  value: V;
}
