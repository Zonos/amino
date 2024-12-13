import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const GW = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M21.333 4H10v8.667h14v-6A2.667 2.667 0 0 0 21.333 4Z"
        fill="#FCD116"
      />
      <path
        d="M10 21.333h11.333A2.667 2.667 0 0 0 24 18.667v-6H10v8.666Z"
        fill="#009E49"
      />
      <path
        d="M10 4H2.667A2.667 2.667 0 0 0 0 6.667v12a2.667 2.667 0 0 0 2.667 2.666H10V4ZM6.667 15.333 4.969 14.1 3.27 15.333l.648-1.996-1.698-1.234h2.1l.649-1.996.648 1.996h2.099l-1.698 1.234.649 1.996Z"
        fill="#CE1126"
      />
      <path
        d="m5.617 12.103-.648-1.996-.649 1.996H2.221l1.698 1.234-.648 1.996L4.969 14.1l1.698 1.234-.649-1.996 1.698-1.234H5.617Z"
        fill="#000"
      />
    </FlagIconBase>
  ),
);
