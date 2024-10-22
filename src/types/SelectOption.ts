import type { ReactNode } from 'react';

export type SelectValue = string | number | null;

export type SelectOption<V extends SelectValue = SelectValue> = {
  icon?: ReactNode;
  isDisabled?: boolean;
  label: string;
  /**
   * For checkboxes
   */
  labelDescription?: string;
  value: V;
};
