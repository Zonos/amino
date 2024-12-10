import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const MA = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M640 0H0v480h640z" fill="#c1272d" />
      <path
        d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
        fill="none"
        stroke="#006233"
        strokeWidth="11.7"
      />
    </FlagIconBase>
  ),
);
