import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const PW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          <path fillOpacity=".7" d="M-70.3 0h640v480h-640z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath={`url(#${ids[0]})`}
        transform="translate(70.3)"
      >
        <path fill="#4aadd6" d="M-173.4 0h846.3v480h-846.3z" />
        <path
          fill="#ffde00"
          d="M335.6 232.1a135.9 130.1 0 11-271.7 0 135.9 130.1 0 11271.7 0z"
        />
      </g>
    </CountryIconBase>
  );
});
