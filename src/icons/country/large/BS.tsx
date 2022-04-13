import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BS = () => {
  const ids = useStableUniqueId(1);
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
          d="M0 0H32V24H0V0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V8H32V0H0Z"
          fill="#3CB1CF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 16V24H32V16H0Z"
          fill="#3CB1CF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L16 12L0 24V0Z"
          fill="#272727"
        />
      </g>
    </svg>
  );
};
