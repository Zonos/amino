import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SR = () => {
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
          d="M0 8H16V12H0V8Z"
          fill="#4E8B1D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H16V3H0V0Z"
          fill="#4E8B1D"
        />
        <path
          d="M0 3.25H-0.75V4V8V8.75H0H16H16.75V8V4V3.25H16H0Z"
          fill="#AF0100"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.0012 7.24712L6.75408 8L7.03854 6.53083L6 5.4313L7.40624 5.37184L8.0012 4L8.59615 5.37184H10L8.96385 6.53083L9.27579 8L8.0012 7.24712Z"
          fill="#FECA00"
        />
      </g>
    </svg>
  );
};
