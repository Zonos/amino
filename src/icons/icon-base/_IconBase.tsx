import { type ReactNode, forwardRef } from 'react';

import { theme } from 'src/styles/constants/theme';
import { type IconProps } from 'src/types/IconProps';

type Props = { children: ReactNode; viewBox?: string } & IconProps;

export const IconBase = forwardRef<SVGSVGElement, Props>(
  ({ children, className, color, size, viewBox }, ref) => {
    const iconSize = size || 24;
    return (
      <svg
        ref={ref}
        className={className}
        color={color && `${theme[color]}`}
        fill="none"
        height={iconSize}
        viewBox={viewBox || `0 0 24 24`}
        width={iconSize}
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    );
  },
);
