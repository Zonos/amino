import React from 'react';

import { useStableUniqueId } from 'hooks';

export const DJ = () => {
  const ids = useStableUniqueId(3);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V15H20V0H0Z"
          fill="#73BE4A"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 -1.25V7.5H20V-1.25H0Z"
            fill="#6699FF"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V15L11.25 7.5L0 0Z"
          fill="white"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15L11.25 7.5L0 0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.37612 8.79417L3.20695 9.5L3.47363 8.12265L2.5 7.09184L3.81835 7.0361L4.37612 5.75L4.93389 7.0361H6.25L5.27861 8.12265L5.57106 9.5L4.37612 8.79417Z"
            fill="#E31D1C"
          />
        </g>
      </g>
    </svg>
  );
};
