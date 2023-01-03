import { ReactNode } from 'react';

export type DarkModeWrapperProps = {
  children: ReactNode;
};

export const DarkModeWrapper = ({ children }: DarkModeWrapperProps) => (
  <div data-theme="dark">{children}</div>
);
