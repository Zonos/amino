import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SR = () => {
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
          fill="#4E8B1D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H32V6H0V0Z"
          fill="#4E8B1D"
        />
        <path
          d="M0 6.5H-1.5V8V16V17.5H0H32H33.5V16V8V6.5H32H0Z"
          fill="#AF0100"
          stroke="white"
          strokeWidth="3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0024 14.4942L13.5082 16L14.0771 13.0617L12 10.8626L14.8125 10.7437L16.0024 8L17.1923 10.7437H20L17.9277 13.0617L18.5516 16L16.0024 14.4942Z"
          fill="#FECA00"
        />
      </g>
    </svg>
  );
};
