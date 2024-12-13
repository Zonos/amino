import { forwardRef, type ReactNode } from 'react';

import styles from './_FlagIconBase.module.scss';

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
      className={styles.flag}
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
