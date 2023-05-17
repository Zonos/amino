import type { ReactNode } from 'react';

export type DarkModeWrapperProps = {
  children: ReactNode;
};

export const DarkModeWrapper = ({ children }: DarkModeWrapperProps) => (
  <div data-theme="night">{children}</div>
);
