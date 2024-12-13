import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const MU = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="M0 360h640v120H0z" fill="#00a04d" />
        <path d="M0 120h640v120H0z" fill="#151f6d" />
        <path d="M0 0h640v120H0z" fill="#ee2737" />
        <path d="M0 240h640v120H0z" fill="#ffcd00" />
      </g>
    </FlagIconBase>
  ),
);
