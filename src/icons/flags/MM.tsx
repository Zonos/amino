import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const MM = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M0 18.556a2.667 2.667 0 0 0 2.667 2.666h18.666A2.667 2.667 0 0 0 24 18.556v-2.667H0v2.667Z"
        fill="#EA2839"
      />
      <path d="M0 9.222h24v6.667H0V9.222Z" fill="#34B232" />
      <path
        d="M21.333 3.889H2.667A2.667 2.667 0 0 0 0 6.556v2.666h24V6.556a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#FECB01"
      />
      <path
        d="m12 6.396 1.569 4.826h5.075l-4.106 2.89 1.568 4.778L12 15.884l-4.106 2.972 1.569-4.738-4.106-2.896h5.075L12 6.396Z"
        fill="#fff"
      />
    </FlagIconBase>
  ),
);
