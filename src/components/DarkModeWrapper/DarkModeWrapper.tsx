import React from "react";

type Props = {
  children: React.ReactNode;
};

export const DarkModeWrapper = ({ children }: Props) => (
  <div data-theme="dark">{children}</div>
);
