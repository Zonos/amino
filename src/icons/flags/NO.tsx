import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const NO = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M0 0h640v480H0z" fill="#ed2939" />
      <path d="M180 0h120v480H180z" fill="#fff" />
      <path d="M0 180h640v120H0z" fill="#fff" />
      <path d="M210 0h60v480h-60z" fill="#002664" />
      <path d="M0 210h640v60H0z" fill="#002664" />
    </FlagIconBase>
  ),
);
