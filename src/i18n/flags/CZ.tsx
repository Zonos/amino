import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const CZ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          <path fillOpacity=".7" d="M-74 0h682.7v512H-74z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath={`url(#${ids[0]})`}
        transform="translate(69.4) scale(.94)"
      >
        <path fill="#e80000" d="M-74 0h768v512H-74z" />
        <path fill="#fff" d="M-74 0h768v256H-74z" />
        <path fill="#00006f" d="M-74 0l382.7 255.7L-74 511V0z" />
      </g>
    </CountryIconBase>
  );
});
