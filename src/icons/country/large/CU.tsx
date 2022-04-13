import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CU = () => {
  const ids = useStableUniqueId(3);
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
          d="M0 0V24H32V0H0Z"
          fill="#3D58DB"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24H32V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M0 8H-2V10V14V16H0H32H34V14V10V8H32H0Z"
            fill="#3D58DB"
            stroke="#F7FCFF"
            strokeWidth="4"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V24L18 12L0 0Z"
          fill="#E31D1C"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="18"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24L18 12L0 0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.68789 14.217L3.01596 16.1549L4.80362 12.261L2.52563 10.1809L5.33812 10.0771L6.68789 6.5564L7.71793 10.0771H10.5256L8.65424 12.261L10.1428 16.1549L6.68789 14.217Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </svg>
  );
};
