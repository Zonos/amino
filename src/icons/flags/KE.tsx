import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const KE = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <path
          id={`${ids[0]}`}
          strokeMiterlimit="10"
          d="m-28.6 47.5 1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
        />
      </defs>
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path d="M0 0h640v144H0z" />
      <path fill="#060" d="M0 336h640v144H0z" />
      <g id={`${ids[1]}`} transform="matrix(3 0 0 3 320 240)">
        <use width="100%" height="100%" stroke="#000" xlinkHref="#a" />
        <use width="100%" height="100%" fill="#fff" xlinkHref="#a" />
      </g>
      <use
        width="100%"
        height="100%"
        transform="matrix(-1 0 0 1 640 0)"
        xlinkHref="#b"
      />
      <path
        fill="#b00"
        d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5V168z"
      />
      <path
        id={`${ids[2]}`}
        d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72"
      />
      <use
        width="100%"
        height="100%"
        transform="matrix(-1 0 0 1 640 0)"
        xlinkHref="#c"
      />
      <g fill="#fff" transform="matrix(3 0 0 3 320 240)">
        <ellipse rx="4" ry="6" />
        <path id={`${ids[3]}`} d="M1 5.8s4 8 4 21-4 21-4 21z" />
        <use width="100%" height="100%" transform="scale(-1)" xlinkHref="#d" />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlinkHref="#d"
        />
        <use
          width="100%"
          height="100%"
          transform="scale(1 -1)"
          xlinkHref="#d"
        />
      </g>
    </FlagIconBase>
  );
});
