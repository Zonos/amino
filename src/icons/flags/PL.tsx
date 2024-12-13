import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const PL = forwardRef<SVGSVGElement, Props>(
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
        <path d="M640 480H0V240h640z" fill="#dc143c" />
      </g>
    </FlagIconBase>
  ),
);
