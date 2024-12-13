import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const GN = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 0h213.3v480H0z" fill="red" />
        <path d="M213.3 0h213.4v480H213.3z" fill="#ff0" />
        <path d="M426.7 0H640v480H426.7z" fill="#090" />
      </g>
    </FlagIconBase>
  ),
);
