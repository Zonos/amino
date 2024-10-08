import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const GY = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="M2.4 0H640v480H2.4z" fill="#399408" />
        <path
          d="M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8.2 0z"
          fill="#fff"
        />
        <path
          d="M.3 20.2c3.4 0 559 217.9 555.9 220L1.9 463.2.3 20.3z"
          fill="#ffde08"
        />
        <path d="M1.9.8c1.8 0 290.9 240.9 290.9 240.9L1.8 477V.8z" />
        <path
          d="M.3 33.9c1.6-15 260.9 208.4 260.9 208.4L.2 451.7V33.9z"
          fill="#de2110"
        />
      </g>
    </FlagIconBase>
  ),
);
