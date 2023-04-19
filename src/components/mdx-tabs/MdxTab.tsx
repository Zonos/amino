import { ReactNode } from 'react';

export const MdxTab = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  xlabel,
}: {
  children?: ReactNode;
  xlabel: string;
}) => <div>{children}</div>;

MdxTab.stableName = 'Tab';
