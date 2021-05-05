import React, { ReactNode } from 'react';
import { IconProps } from 'types';

type Props = { children: ReactNode } & IconProps;

export const IconBase = ({ size, color, children }: Props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    color={color && `var(--amino-${color})`}
    viewBox="0 0 16 16"
  >
    {children}
  </svg>
);
