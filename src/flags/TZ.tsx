import React, { forwardRef } from 'react';

import { FlagIconBase } from './FlagIconBase/FlagIconBase';
import { useStableUniqueId } from './FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const TZ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M10 0h160v120H10z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath={`url(#${ids[0]})`}
        transform="matrix(4 0 0 4 -40 0)"
      >
        <path fill="#09f" d="M0 0h180v120H0z" />
        <path fill="#090" d="M0 0h180L0 120V0z" />
        <path d="M0 120h40l140-95V0h-40L0 95v25z" />
        <path
          fill="#ff0"
          d="M0 91.5L137.2 0h13.5L0 100.5v-9zM29.3 120L180 19.5v9L42.8 120H29.3z"
        />
      </g>
    </FlagIconBase>
  );
});
