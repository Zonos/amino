import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TT = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V24H32V0H0Z"
          fill="#E31D1C"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24H32V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M29.5595 29.4958L29.0167 29.9397L28.5373 29.4279L-1.80681 -2.97079L-2.35513 -3.55623L-1.73422 -4.06404L1.36213 -6.59636L1.90497 -7.04031L2.38434 -6.52848L32.7284 25.8702L33.2768 26.4557L32.6559 26.9635L29.5595 29.4958Z"
            fill="#272727"
            stroke="#F7FCFF"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
};
