import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const TH = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="M0 0h640v480H0z" fill="#f4f5f8" />
        <path d="M0 162.5h640v160H0z" fill="#2d2a4a" />
        <path d="M0 0h640v82.5H0zm0 400h640v80H0z" fill="#a51931" />
      </g>
    </FlagIconBase>
  ),
);
