import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const HU = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="M640 480H0V0h640z" fill="#fff" />
        <path d="M640 480H0V320h640z" fill="#388d00" />
        <path d="M640 160.1H0V.1h640z" fill="#d43516" />
      </g>
    </FlagIconBase>
  ),
);
