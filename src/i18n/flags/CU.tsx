import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const CU = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          <path fillOpacity=".7" d="M-32 0h682.7v512H-32z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath={`url(#${ids[0]})`}
        transform="translate(30) scale(.94)"
      >
        <path fill="#0050f0" d="M-32 0h768v512H-32z" />
        <path
          fill="#fff"
          d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z"
        />
        <path fill="#ed0000" d="M-32 0l440.7 255.7L-32 511V0z" />
        <path
          fill="#fff"
          d="M161.8 325.5L114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
        />
      </g>
    </CountryIconBase>
  );
});
