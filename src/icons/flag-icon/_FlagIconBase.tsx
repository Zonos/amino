import { forwardRef, ReactNode } from 'react';

type FlagIconBaseProps = {
  children: ReactNode;
  height: number;
  width: number;
  viewBox: string;
};

export const FlagIconBase = forwardRef<SVGSVGElement, FlagIconBaseProps>(
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
