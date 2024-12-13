import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const BW = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="M0 0h640v480H0z" fill="#00cbff" />
        <path d="M0 160h640v160H0z" fill="#fff" />
        <path d="M0 186h640v108H0z" />
      </g>
    </FlagIconBase>
  ),
);
