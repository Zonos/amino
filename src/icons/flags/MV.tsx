import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const MV = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M0 0h640v480H0z" fill="#d21034" />
      <path d="M120 120h400v240H120z" fill="#007e3a" />
      <circle cx="350" cy="240" fill="#fff" r="80" />
      <circle cx="380" cy="240" fill="#007e3a" r="80" />
    </FlagIconBase>
  ),
);
