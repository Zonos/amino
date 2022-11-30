import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[1]})`}>
        <mask
          id={`${ids[0]}`}
          width="16"
          height="12"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h16v12H0z" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fill="#73BE4A"
            fillRule="evenodd"
            d="M0 0h16v12H0V0Z"
            clipRule="evenodd"
          />
          <path
            fill="#AF0100"
            fillRule="evenodd"
            d="M0 0v8h16V0H0Z"
            clipRule="evenodd"
          />
          <path fill="#F7FCFF" d="M0 0h3v12H0z" />
          <path
            fill="#D0181A"
            fillRule="evenodd"
            d="M.5 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM1 2.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM2.5 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 7a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM1 9.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2.5.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM1.5 10a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM2 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm.055 4.52L3 7v1l.022.046L1.546 6.57.219 8H0V7l.991-.986-.99-.992V4h.108l1.423 1.476 1.43-1.422L3 4v1l-.945 1.02ZM1.5 3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM2 8.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"
            clipRule="evenodd"
          />
          <path
            fill="#8F181A"
            fillRule="evenodd"
            d="M0 0h1v1H0V0Zm1 2H0v1h1V2ZM0 4h1v1H0V4Zm1 3H0v1h1V7ZM0 9h1v1H0V9Zm1 2H0v1h1v-1Zm2 0H2v1h1v-1ZM3 0H2v1h1V0Z"
            clipRule="evenodd"
            opacity=".4"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[1]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
