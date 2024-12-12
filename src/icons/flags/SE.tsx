import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const SE = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M10.333 21.11h11c1.473 0 2.667-1.193 2.667-3v-4H10.333v7Zm11-17.332h-11v7H24V6.444a2.667 2.667 0 0 0-2.667-2.666ZM7 3.778H2.667A2.667 2.667 0 0 0 0 6.442v4.336h7v-7ZM0 14.11v4.003c.001 1.804 1.195 2.997 2.667 2.997H7v-7H0Z"
        fill="#006AA7"
      />
      <path
        d="M10.333 3.778H7v7H0v3.333h7v7h3.333v-7H24v-3.333H10.333v-7Z"
        fill="#FECC00"
      />
    </FlagIconBase>
  ),
);
