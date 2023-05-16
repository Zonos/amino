import { type ReactNode, forwardRef } from 'react';

import { theme } from 'src/styles/constants/theme';
import { type IconProps } from 'src/types/IconProps';

type Props = { children: ReactNode; viewBox?: string } & IconProps;

export const IconBase = forwardRef<SVGSVGElement, Props>(
  ({ size, color, viewBox, children, className }, ref) => {
    const iconSize = size || 24;
    return (
      <svg
        ref={ref}
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        color={color && `${theme[color]}`}
        viewBox={viewBox || `0 0 24 24`}
      >
        {children}
      </svg>
    );
  }
);
