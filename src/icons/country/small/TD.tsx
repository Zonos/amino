import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TD = () => {
  const ids = useStableUniqueId(1);
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
          d="M11 0H16V12H11V0Z"
          fill="#E11C1B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H6V12H0V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 0H11V12H5V0Z"
          fill="#FBCD17"
        />
      </g>
    </svg>
  );
};
