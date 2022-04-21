import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const GM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M0-48h640v480H0z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath={`url(#${ids[0]})`}
        transform="translate(0 48)"
      >
        <path fill="red" d="M0-128h640V85.3H0z" />
        <path fill="#fff" d="M0 85.3h640V121H0z" />
        <path fill="#009" d="M0 120.9h640V263H0z" />
        <path fill="#fff" d="M0 263.1h640v35.6H0z" />
        <path fill="#090" d="M0 298.7h640V512H0z" />
      </g>
    </CountryIconBase>
  );
});
