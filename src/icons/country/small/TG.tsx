import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TG = () => {
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
          d="M0 -0.5H-0.5V0V12V12.5H0H16H16.5V12V0V-0.5H16H0Z"
          fill="#5EAA22"
          stroke="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3V5H16V3H0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7V9H16V7H0Z"
          fill="#FECA00"
        />
        <rect width="8" height="7" fill="#F50101" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.125 5.07212L2.26534 6.22285L2.98731 4.29106L1.5 2.98962H3.32389L4.125 1.06494L4.73635 2.98962H6.5383L5.27272 4.29106L5.89554 6.12808L4.125 5.07212Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
