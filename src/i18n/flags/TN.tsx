import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const TN = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath={`url(#${ids[0]})`}
        transform="translate(80) scale(.9375)"
      >
        <path fill="#e70013" d="M-128 0h768v512h-768z" />
        <path
          fill="#fff"
          d="M385.8 255.8a129.1 129.1 0 11-258.2 0 129.1 129.1 0 01258.2 0z"
        />
        <path
          fill="#e70013"
          d="M256.7 341.4a85.7 85.7 0 010-171.3c11.8 0 25.3 2.8 34.4 9.5-62.6 2.3-78.5 55.5-78.5 76.9s10.1 69.1 78.5 76.2c-7.8 5-22.6 8.7-34.4 8.7z"
        />
        <path
          fill="#e70013"
          d="M332.1 291.8l-38.9-14.2-25.7 32.4 1.5-41.3-38.8-14.5 39.8-11.4 1.7-41.3 23.2 34.3 39.8-11-25.5 32.5z"
        />
      </g>
    </CountryIconBase>
  );
});
