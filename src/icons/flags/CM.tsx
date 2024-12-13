import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const CM = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M8 4.111v17.333h8V4.111H8Zm5.255 10.393L12 13.594l-1.255.91.48-1.474-1.255-.912h1.55l.48-1.475.48 1.475h1.55l-1.255.911.48 1.475Z"
        fill="#CC212D"
      />
      <path
        d="M2.667 4.111A2.667 2.667 0 0 0 0 6.778v12a2.667 2.667 0 0 0 2.667 2.666H8V4.111H2.667Z"
        fill="#288541"
      />
      <path
        d="M21.333 4.111H16v17.333h5.333A2.667 2.667 0 0 0 24 18.778v-12a2.667 2.667 0 0 0-2.667-2.667Zm-8.854 8.007L12 10.643l-.48 1.475H9.97l1.255.912-.48 1.474 1.255-.91 1.255.91-.48-1.474 1.255-.912h-1.55Z"
        fill="#FEE833"
      />
    </FlagIconBase>
  ),
);
