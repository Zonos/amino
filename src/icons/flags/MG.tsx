import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const MG = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M213.3 0H640v240H213.3z" fill="#ff3319" />
        <path d="M213.3 240H640v240H213.3z" fill="#00cc28" />
        <path d="M0 0h213.3v480H0z" fill="#fff" />
      </g>
    </FlagIconBase>
  ),
);
