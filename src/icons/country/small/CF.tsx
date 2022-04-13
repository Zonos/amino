import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CF = () => {
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
          d="M0 0H16V3H0V0Z"
          fill="#3D58DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3H16V6H0V3Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6H16V9H0V6Z"
          fill="#73BE4A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 9H16V12H0V9Z"
          fill="#FFD018"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.2647 2.70803L1.05243 3.54888L1.4398 2.1087L0.549866 1.18871L1.75488 1.13897L2.2647 -0.285156L2.77452 1.13897H3.97749L3.08961 2.1087L3.53427 3.46388L2.2647 2.70803Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0H10V12H6V0Z"
          fill="#E11C1B"
        />
      </g>
    </svg>
  );
};
