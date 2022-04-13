import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GY = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V15H0V0Z"
          fill="#5EAA22"
        />
        <path
          d="M0.625 14.1166V0.883373L19.3721 7.5L0.625 14.1166Z"
          fill="#FECA00"
          stroke="#F7FCFF"
          strokeWidth="1.25"
        />
        <path
          d="M-0.625 14.9721V0.0278996L8.98199 7.5L-0.625 14.9721Z"
          fill="#E11C1B"
          stroke="#272727"
          strokeWidth="1.25"
        />
      </g>
    </svg>
  );
};
