import React, { forwardRef } from 'react';

import { FlagIconBase } from './FlagIconBase/FlagIconBase';
import { useStableUniqueId } from './FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const PR = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M-37.3 0h682.7v512H-37.3z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath={`url(#${ids[0]})`}
        transform="translate(35) scale(.9375)"
      >
        <path fill="#ed0000" d="M-37.3 0h768v512h-768z" />
        <path
          fill="#fff"
          d="M-37.3 102.4h768v102.4h-768zm0 204.8h768v102.4h-768z"
        />
        <path fill="#0050f0" d="M-37.3 0l440.7 255.7L-37.3 511V0z" />
        <path
          fill="#fff"
          d="M156.4 325.5L109 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
        />
      </g>
    </FlagIconBase>
  );
});
