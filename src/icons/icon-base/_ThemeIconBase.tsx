import { forwardRef, type ReactNode } from 'react';

type Props = { children: ReactNode; className?: string; viewBox?: string };

export const ThemeIconBase = forwardRef<SVGSVGElement, Props>(
  ({ children, className, viewBox }, ref) => (
    <svg
      className={className}
      fill="none"
      ref={ref}
      viewBox={viewBox || '0 0 110 64'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  ),
);
