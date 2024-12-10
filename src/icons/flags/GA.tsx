import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const GA = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="M640 480H0V0h640z" fill="#ffe700" />
        <path d="M640 160H0V0h640z" fill="#36a100" />
        <path d="M640 480H0V320h640z" fill="#006dbc" />
      </g>
    </FlagIconBase>
  ),
);
