import { forwardRef, type ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import type { IconProps } from 'src/types/IconProps';

type Props = { children: ReactNode; viewBox?: string } & IconProps;

export const IconBase = forwardRef<SVGSVGElement, Props>(
  ({ children, className, color, inlineBlock, size = 24, viewBox }, ref) => (
    <svg
      ref={ref}
      className={className}
      color={color && `${theme[color]}`}
      fill="none"
      height={size}
      style={{ display: inlineBlock ? 'inline-block' : 'block' }}
      viewBox={viewBox || `0 0 24 24`}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  ),
);
