import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const PE = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M2.667 4.222A2.667 2.667 0 0 0 0 6.89v12a2.667 2.667 0 0 0 2.667 2.666H8V4.223H2.667Z"
        fill="#D91023"
      />
      <path d="M8 4.222h8v17.333H8V4.222Z" fill="#EEE" />
      <path
        d="M21.333 4.222H16v17.333h5.333A2.667 2.667 0 0 0 24 18.89v-12a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#D91023"
      />
    </FlagIconBase>
  ),
);
