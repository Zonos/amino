import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const FR = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 0h640v480H0z" fill="#fff" />
        <path d="M0 0h213.3v480H0z" fill="#00267f" />
        <path d="M426.7 0H640v480H426.7z" fill="#f31830" />
      </g>
    </FlagIconBase>
  ),
);
