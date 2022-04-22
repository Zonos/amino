import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const GD = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <defs>
        <g id={`${ids[0]}`}>
          <g id={`${ids[1]}`}>
            <path
              id={`${ids[2]}`}
              fill="#fcd116"
              d="M0-1v1h.5"
              transform="rotate(18 0 -1)"
            />
            <use transform="scale(-1 1)" xlinkHref="#a" />
          </g>
          <use transform="rotate(72)" xlinkHref="#b" />
          <use transform="rotate(144)" xlinkHref="#b" />
          <use transform="rotate(216)" xlinkHref="#b" />
          <use transform="rotate(288)" xlinkHref="#b" />
        </g>
      </defs>
      <path fill="#ce1126" d="M0 0h640v480H0z" />
      <path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z" />
      <path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z" />
      <circle cx="319.9" cy="240.1" r="57.6" fill="#ce1126" />
      <use
        width="100%"
        height="100%"
        transform="matrix(52.8 0 0 52.8 320 240)"
        xlinkHref="#c"
      />
      <use
        width="100%"
        height="100%"
        x="-100"
        transform="translate(-30.3)"
        xlinkHref="#d"
      />
      <use
        id={`${ids[3]}`}
        width="100%"
        height="100%"
        transform="matrix(31.2 0 0 31.2 320 33.6)"
        xlinkHref="#c"
      />
      <use
        width="100%"
        height="100%"
        x="100"
        transform="translate(30.3)"
        xlinkHref="#d"
      />
      <path
        fill="#ce1126"
        d="M102.3 240.7a80.4 80.4 0 0033.5 33.2 111 111 0 00-11.3-45l-22.2 11.8z"
      />
      <path
        fill="#fcd116"
        d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 01-10.9-41.9 70 70 0 0132.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"
      />
      <use
        width="100%"
        height="100%"
        x="-100"
        transform="translate(-30.3 414.6)"
        xlinkHref="#d"
      />
      <use
        width="100%"
        height="100%"
        transform="matrix(31.2 0 0 31.2 320 448.2)"
        xlinkHref="#c"
      />
      <use
        width="100%"
        height="100%"
        x="100"
        transform="translate(30.3 414.6)"
        xlinkHref="#d"
      />
    </CountryIconBase>
  );
});
