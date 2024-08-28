import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const SJ = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M0 0h640v480H0z" fill="#ef2b2d" />
      <path d="M180 0h120v480H180z" fill="#fff" />
      <path d="M0 180h640v120H0z" fill="#fff" />
      <path d="M210 0h60v480h-60z" fill="#002868" />
      <path d="M0 210h640v60H0z" fill="#002868" />
    </FlagIconBase>
  ),
);
