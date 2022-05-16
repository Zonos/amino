import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const RW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#20603d" d="M0 0h640v480H0z" />
      <path fill="#fad201" d="M0 0h640v360H0z" />
      <path fill="#00a1de" d="M0 0h640v240H0z" />
      <g transform="translate(511 125.4) scale(.66667)">
        <g id={`${ids[0]}`}>
          <path
            id={`${ids[1]}`}
            fill="#e5be01"
            d="M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
          />
          <use
            width="100%"
            height="100%"
            transform="scale(1 -1)"
            xlinkHref="#a"
          />
        </g>
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlinkHref="#b"
        />
        <circle r="34.3" fill="#e5be01" stroke="#00a1de" strokeWidth="3.4" />
      </g>
    </FlagIconBase>
  );
});
