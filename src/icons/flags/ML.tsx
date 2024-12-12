import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const ML = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="M425.8 0H640v480H425.7z" fill="red" />
        <path d="M0 0h212.9v480H0z" fill="#009a00" />
        <path d="M212.9 0h214v480h-214z" fill="#ff0" />
      </g>
    </FlagIconBase>
  ),
);
