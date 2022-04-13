import React from 'react';

import { useStableUniqueId } from 'hooks';

export const NG = () => {
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
          d="M0 0H16V12H0V0Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 0H16V12H11V0Z"
          fill="#009933"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H5V12H0V0Z"
          fill="#009933"
        />
      </g>
    </svg>
  );
};
