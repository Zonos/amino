import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CU = () => {
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
          fill="#3D58DB"
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
            d="M0 4H-1V5V7V8H0H16H17V7V5V4H16H0Z"
            fill="#3D58DB"
            stroke="#F7FCFF"
            strokeWidth="2"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12L9 6L0 0Z"
          fill="#E31D1C"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="9"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12L9 6L0 0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.34388 7.10835L1.50792 8.07735L2.40175 6.13038L1.26276 5.09032L2.669 5.03842L3.34388 3.27808L3.85891 5.03842H5.26276L4.32706 6.13038L5.07133 8.07735L3.34388 7.10835Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </svg>
  );
};
