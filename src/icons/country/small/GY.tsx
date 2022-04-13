import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GY = () => {
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
          fill="#5EAA22"
        />
        <path
          d="M0.5 11.2933V0.706699L15.4977 6L0.5 11.2933Z"
          fill="#FECA00"
          stroke="#F7FCFF"
        />
        <path
          d="M-0.5 11.9777V0.0223197L7.18559 6L-0.5 11.9777Z"
          fill="#E11C1B"
          stroke="#272727"
        />
      </g>
    </svg>
  );
};
