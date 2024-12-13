import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const NL = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt" transform="scale(1.25 .9375)">
        <rect fill="#fff" height="509.8" rx="0" ry="0" width="512" />
        <rect
          fill="#21468b"
          height="169.9"
          rx="0"
          ry="0"
          width="512"
          y="342.1"
        />
        <path d="M0 0h512v170H0z" fill="#ae1c28" />
      </g>
    </FlagIconBase>
  ),
);
