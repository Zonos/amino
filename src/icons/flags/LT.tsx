import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const LT = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt" transform="scale(.64143 .96773)">
        <rect
          fill="#006a44"
          height="708.7"
          rx="0"
          ry="0"
          transform="scale(.93865 .69686)"
          width="1063"
        />
        <rect
          fill="#c1272d"
          height="236.2"
          rx="0"
          ry="0"
          transform="scale(.93865 .69686)"
          width="1063"
          y="475.6"
        />
        <path d="M0 0h997.8v164.6H0z" fill="#fdb913" />
      </g>
    </FlagIconBase>
  ),
);
