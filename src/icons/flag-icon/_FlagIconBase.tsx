import { forwardRef, type ReactNode } from 'react';

type FlagIconBaseProps = {
  borderRadius?: number;
  children: ReactNode;
  height: number;
  viewBox: string;
  width: number;
};

export const FlagIconBase = forwardRef<SVGSVGElement, FlagIconBaseProps>(
  ({ borderRadius, children, height, viewBox, width }, ref) => (
    <svg
      ref={ref}
      className="rounded-[var(--border-radius,7px)]"
      height={height}
      style={
        borderRadius
          ? {
              '--border-radius': `${borderRadius}px`,
            }
          : undefined
      }
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  ),
);
