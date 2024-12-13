import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const ID = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 0h640v249H0z" fill="#e70011" />
        <path d="M0 240h640v240H0z" fill="#fff" />
      </g>
    </FlagIconBase>
  ),
);
