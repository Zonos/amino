import React from 'react';

import { useStableUniqueId } from 'hooks';

export const NG = () => {
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
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 0H32V24H21V0Z"
          fill="#009933"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H11V24H0V0Z"
          fill="#009933"
        />
      </g>
    </svg>
  );
};
