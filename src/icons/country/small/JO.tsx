import React from 'react';

import { useStableUniqueId } from 'hooks';

export const JO = () => {
  const ids = useStableUniqueId(3);
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <rect width="16" height="12" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H16V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V4H16V0H0Z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8V12H16V8H0Z"
            fill="#009933"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12L10 6L0 0Z"
          fill="#E31D1C"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="10"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12L10 6L0 0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5009 6.93534L3.56556 7.5L3.77891 6.39812L3 5.57347L4.05468 5.52888L4.5009 4.5L4.94711 5.52888H6L5.22289 6.39812L5.45685 7.5L4.5009 6.93534Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </svg>
  );
};
