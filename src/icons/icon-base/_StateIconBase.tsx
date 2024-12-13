import { forwardRef, type ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import type { IconProps } from 'src/types/IconProps';

type Props = { children: ReactNode; viewBox?: string } & IconProps;

export const StateIconBase = forwardRef<SVGSVGElement, Props>(
  ({ children, className, viewBox }, ref) => (
    <svg
      ref={ref}
      className={className}
      color={theme.gray50}
      fill="none"
      height={32}
      viewBox={viewBox || '0 0 40 40'}
      width={32}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  ),
);
