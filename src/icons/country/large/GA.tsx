import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GA = () => {
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
          d="M0 16H32V24H0V16Z"
          fill="#40A8FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8H32V16H0V8Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H32V8H0V0Z"
          fill="#73BE4A"
        />
      </g>
    </svg>
  );
};
