import type { ReactNode } from 'react';

export interface Option<V extends string | number = string | number> {
  icon?: ReactNode;
  isDisabled?: boolean;
  label: string;
  labelDescription?: string;
  value: V;
}
