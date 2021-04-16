import React from 'react';

export type DarkModeWrapperProps = {
  children: React.ReactNode;
};

export const DarkModeWrapper = ({ children }: DarkModeWrapperProps) => (
  <div data-theme="dark">{children}</div>
);
