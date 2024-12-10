import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const SN = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 0h213.3v480H0z" fill="#0b7226" />
        <path d="M213.3 0h213.3v480H213.3z" fill="#ff0" />
        <path d="M426.6 0H640v480H426.6z" fill="#bc0000" />
      </g>
      <path
        d="M342 218.8h71.8l-56.6 43.6 20.7 69.3-56.6-43.6-56.6 41.6 20.7-67.3-56.6-43.6h69.8l22.7-71.3z"
        fill="#0b7226"
      />
    </FlagIconBase>
  ),
);
