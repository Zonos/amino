import type { ReactNode } from 'react';

export type SelectOption<V extends string | number | null = string | number> = {
  icon?: ReactNode;
  isDisabled?: boolean;
  label: string;
  /**
   * For checkboxes
   */
  labelDescription?: string;
  value: V;
};
