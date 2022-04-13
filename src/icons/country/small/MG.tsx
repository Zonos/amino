import React from 'react';

import { useStableUniqueId } from 'hooks';

export const MG = () => {
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
          d="M6 6H16V12H6V6Z"
          fill="#78D843"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0H16V6H6V0Z"
          fill="#EA1A1A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H6V12H0V0Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
