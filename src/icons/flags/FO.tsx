import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const FO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M-78 32h640v480H-78z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="0"
        clipPath={`url(#${ids[0]})`}
        transform="translate(78 -32)"
      >
        <path fill="#fff" d="M-78 32h663.9v480H-78z" />
        <path
          fill="#003897"
          d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186V218.7z"
        />
        <path
          fill="#d72828"
          d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76v-53.4z"
        />
      </g>
    </FlagIconBase>
  );
});
