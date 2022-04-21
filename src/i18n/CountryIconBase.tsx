import React, { forwardRef, ReactNode } from 'react';

type IconBaseProps = {
  children: ReactNode;
  height: number;
  width: number;
  viewBox: string;
};

export const CountryIconBase = forwardRef<SVGSVGElement, IconBaseProps>(
  ({ width, height, children, viewBox }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
    >
      {children}
    </svg>
  )
);
