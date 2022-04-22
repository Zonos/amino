import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BH = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
      <g mask={`url(#${ids[0]})`}>
        <rect width="16" height="12" rx="1" fill="#E31D1C" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h3.4L6 1 3.4 2 6 3 3.4 4 6 5 3.4 6 6 7 3.4 8 6 9l-2.6 1L6 11l-2.6 1H0V0z"
          fill="#F7FCFF"
        />
      </g>
    </CountryIconBase>
  );
});
