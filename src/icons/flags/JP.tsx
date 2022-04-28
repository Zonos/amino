import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';
import { useStableUniqueId } from '../FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const JP = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M-88 32h640v480H-88z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath={`url(#${ids[0]})`}
        transform="translate(88 -32)"
      >
        <path fill="#fff" d="M-128 32h720v480h-720z" />
        <circle
          cx="523.1"
          cy="344.1"
          fill="#d30000"
          transform="translate(-168.4 8.6) scale(.76554)"
          r="194.9"
        />
      </g>
    </FlagIconBase>
  );
});
