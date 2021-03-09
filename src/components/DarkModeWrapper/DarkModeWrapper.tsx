import React from "react";

type Props = {
  forceDarkMode?: boolean;
  children: React.ReactNode;
};

export const DarkModeWrapper = ({ forceDarkMode, children }: Props) => (
  <div data-theme="dark">{children}</div>
);
