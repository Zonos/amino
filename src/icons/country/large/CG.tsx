import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CG = () => {
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
          d="M32 0V24H0L32 0Z"
          fill="#FA1111"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 24V0H32L0 24Z"
          fill="#07A907"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.4918 -5.80005L-1 23.576L5.05163 26.5879L34.6407 -0.212036L29.4918 -5.80005Z"
          fill="#FBCD17"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="-6"
          width="36"
          height="33"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.4918 -5.80005L-1 23.576L5.05163 26.5879L34.6407 -0.212036L29.4918 -5.80005Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`} />
      </g>
    </svg>
  );
};
