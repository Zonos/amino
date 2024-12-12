import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const RW = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(2);
    return (
      <FlagIconBase
        borderRadius={borderRadius}
        height={height}
        ref={ref}
        viewBox="0 0 640 480"
        width={width}
      >
        <path d="M0 0h640v480H0z" fill="#20603d" />
        <path d="M0 0h640v360H0z" fill="#fad201" />
        <path d="M0 0h640v240H0z" fill="#00a1de" />
        <g transform="translate(511 125.4) scale(.66667)">
          <g id={`${ids[0]}`}>
            <path
              d="M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
              fill="#e5be01"
              id={`${ids[1]}`}
            />
            <use
              height="100%"
              transform="scale(1 -1)"
              width="100%"
              xlinkHref={`#${ids[1]}`}
            />
          </g>
          <use
            height="100%"
            transform="scale(-1 1)"
            width="100%"
            xlinkHref={`#${ids[0]}`}
          />
          <circle fill="#e5be01" r="34.3" stroke="#00a1de" strokeWidth="3.4" />
        </g>
      </FlagIconBase>
    );
  },
);
