import { type ReactNode, forwardRef } from 'react';

type Props = { children: ReactNode; viewBox?: string; className?: string };

export const ThemeIconBase = forwardRef<SVGSVGElement, Props>(
  ({ viewBox, children, className }, ref) => (
    <svg
      ref={ref}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || '0 0 110 64'}
    >
      {children}
    </svg>
  )
);
