import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BS = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M-12 0h640v480H-12z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath={`url(#${ids[0]})`}
        transform="translate(12)"
      >
        <path fill="#fff" d="M968.5 480h-979V1.8h979z" />
        <path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z" />
        <path
          fill="#08ced6"
          d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"
        />
        <path d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2-10.9 0z" />
      </g>
    </FlagIconBase>
  );
});
