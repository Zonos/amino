import type { ReactNode } from 'react';

export type NightModeWrapperProps = {
  children: ReactNode;
};

export const NightModeWrapper = ({ children }: NightModeWrapperProps) => (
  <div data-theme="night">{children}</div>
);
