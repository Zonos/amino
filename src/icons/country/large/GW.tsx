import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GW = () => {
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
          d="M16 0H32V12H16V0Z"
          fill="#FBCD17"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 12H32V24H16V12Z"
          fill="#0B9E7A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H16V24H0V0Z"
          fill="#E11C1B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.93065 14.6063L5.44503 17.024L6.55881 12.883L4 10.2378L7.46478 10.0948L8.93065 6L10.3965 10.0948H13.8554L11.3025 12.883L12.581 16.7796L8.93065 14.6063Z"
          fill="#1D1D1D"
        />
      </g>
    </svg>
  );
};
