import React, { forwardRef } from 'react';

import { FlagIconBase } from './FlagIconBase/FlagIconBase';
import { useStableUniqueId } from './FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const GW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`} fillRule="evenodd" clipRule="evenodd">
        <path d="M8 0h8v6H8V0z" fill="#FBCD17" />
        <path d="M8 6h8v6H8V6z" fill="#0B9E7A" />
        <path d="M0 0h8v12H0V0z" fill="#E11C1B" />
        <path
          d="M4.465 7.303L2.723 8.512l.556-2.07L2 5.119l1.732-.072L4.465 3l.733 2.047h1.73L5.65 6.442l.64 1.948-1.826-1.087z"
          fill="#1D1D1D"
        />
      </g>
    </FlagIconBase>
  );
});
