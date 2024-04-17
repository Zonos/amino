import { forwardRef, type ReactNode } from 'react';

type FlagIconBaseProps = {
  children: ReactNode;
  height: number;
  viewBox: string;
  width: number;
};

export const FlagIconBase = forwardRef<SVGSVGElement, FlagIconBaseProps>(
  ({ children, height, viewBox, width }, ref) => (
    <svg
      ref={ref}
      height={height}
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  ),
);
