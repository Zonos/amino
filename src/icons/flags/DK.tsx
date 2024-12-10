import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const DK = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M0 0h640.1v480H0z" fill="#c8102e" />
      <path d="M205.7 0h68.6v480h-68.6z" fill="#fff" />
      <path d="M0 205.7h640.1v68.6H0z" fill="#fff" />
    </FlagIconBase>
  ),
);
