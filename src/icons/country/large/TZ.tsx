import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TZ = () => {
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
          fill="#3195F9"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24L32 0H0Z"
            fill="#73BE4A"
          />
          <path
            d="M-1.82168 25.4392L-1.12772 26.4789L-0.0880487 25.7849L36.1729 1.58147L37.2126 0.887505L36.5186 -0.152167L34.2979 -3.47912L33.604 -4.51879L32.5643 -3.82483L-3.69665 20.3786L-4.73632 21.0726L-4.04236 22.1123L-1.82168 25.4392Z"
            fill="#272727"
            stroke="#FFD018"
            strokeWidth="2.5"
          />
        </g>
      </g>
    </svg>
  );
};
