import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const BG = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 320h640v160H0z" fill="#d62612" />
        <path d="M0 0h640v160H0z" fill="#fff" />
        <path d="M0 160h640v160H0z" fill="#00966e" />
      </g>
    </FlagIconBase>
  ),
);
