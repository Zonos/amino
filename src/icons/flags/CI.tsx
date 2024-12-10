import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const CI = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="M426.8 0H640v480H426.8z" fill="#00cd00" />
        <path d="M0 0h212.9v480H0z" fill="#ff9a00" />
        <path d="M212.9 0h214v480h-214z" fill="#fff" />
      </g>
    </FlagIconBase>
  ),
);
