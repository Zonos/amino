import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const CM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 16 12"
    >
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
        <path d="M5 0h6v12H5V0z" fill="#E11C1B" />
        <path
          d="M8.038 7.245l-1.743 1.21.557-2.071-1.28-1.323 1.733-.071.733-2.048.733 2.048h1.73L9.223 6.384l.639 1.948-1.825-1.087z"
          fill="#FECA00"
        />
        <path d="M11 0h5v12h-5V0z" fill="#FBCD17" />
        <path d="M0 0h5v12H0V0z" fill="#0B9E7A" />
      </g>
    </CountryIconBase>
  );
});
