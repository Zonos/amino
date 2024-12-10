import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const DJ = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <FlagIconBase
        borderRadius={borderRadius}
        height={height}
        ref={ref}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <clipPath id={`${ids[0]}`}>
            <path d="M-40 0h682.7v512H-40z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${ids[0]})`}
          fillRule="evenodd"
          transform="translate(37.5) scale(.94)"
        >
          <path d="M-40 0h768v512H-40z" fill="#0c0" />
          <path d="M-40 0h768v256H-40z" fill="#69f" />
          <path d="m-40 0 382.7 255.7L-40 511V0z" fill="#fffefe" />
          <path
            d="M119.8 292 89 270l-30.7 22.4L69.7 256l-30.6-22.5 37.9-.3 11.7-36.3 12 36.2h37.9l-30.5 22.7 11.7 36.4z"
            fill="red"
          />
        </g>
      </FlagIconBase>
    );
  },
);
