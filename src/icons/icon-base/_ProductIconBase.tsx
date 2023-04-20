import { forwardRef, ReactNode } from 'react';

import { type IconProps } from 'src/types/IconProps';

type Props = { children: ReactNode; viewBox?: string } & IconProps;

export const IconBase = forwardRef<SVGSVGElement, Props>(
  ({ size, viewBox, children, className }, ref) => {
    const iconSize = size || 24;
    return (
      <svg
        ref={ref}
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox={viewBox || `0 0 24 24`}
      >
        {children}
      </svg>
    );
  }
);
