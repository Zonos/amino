import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const CR = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 0h640v480H0z" fill="#0000b4" />
        <path d="M0 75.4h640v322.3H0z" fill="#fff" />
        <path d="M0 157.7h640v157.7H0z" fill="#d90000" />
      </g>
    </FlagIconBase>
  ),
);
