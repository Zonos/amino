import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GBSCT = () => {
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
          fill="#0067C3"
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
            d="M1.20005 25.5999L33.2001 1.5999L30.8 -1.6001L-1.19995 22.3999L1.20005 25.5999Z"
            fill="white"
          />
          <path
            d="M-1.19995 1.5999L30.8 25.5999L33.2001 22.3999L1.20005 -1.6001L-1.19995 1.5999Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};
