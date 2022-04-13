import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CL = () => {
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
          d="M0 0H9V9H0V0Z"
          fill="#3D58DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75 -1.25H20V8.75H8.75V-1.25Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8H20V15H0V8Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.38392 5.61451L2.00663 7.03419L3.17986 4.61866L1.10229 3.04978L3.50072 3.0241L4.40553 0.88208L4.98811 3.0241L7.25825 3.0348L5.53161 4.56928L6.42822 7.03419L4.38392 5.61451Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
