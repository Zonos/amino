import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const SR = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M.1 0h640v480H.1z" fill="#377e3f" />
      <path d="M.1 96h640v288H.1z" fill="#fff" />
      <path d="M.1 144h640v192H.1z" fill="#b40a2d" />
      <path
        d="m320 153.2 56.4 173.6-147.7-107.3h182.6L263.6 326.8z"
        fill="#ecc81d"
      />
    </FlagIconBase>
  ),
);
