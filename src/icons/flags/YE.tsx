import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const YE = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 0h640v472.8H0z" fill="#fff" />
        <path d="M0 0h640v157.4H0z" fill="#f10600" />
        <path d="M0 322.6h640V480H0z" />
      </g>
    </FlagIconBase>
  ),
);
