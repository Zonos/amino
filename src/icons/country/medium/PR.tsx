import React from 'react';

import { useStableUniqueId } from 'hooks';

export const PR = () => {
  const ids = useStableUniqueId(3);
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
          d="M0 0V15H20V0H0Z"
          fill="#EF0000"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M0 5H-1.25V6.25V8.75V10H0H20H21.25V8.75V6.25V5H20H0Z"
            fill="#EF0000"
            stroke="#F7FCFF"
            strokeWidth="2.5"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V15L11.25 7.5L0 0Z"
          fill="#3D58DB"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15L11.25 7.5L0 0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.1799 8.8855L1.88494 10.0968L3.00223 7.66304L1.57849 6.36296L3.33629 6.29808L4.1799 4.09766L4.82368 6.29808H6.57849L5.40887 7.66304L6.33921 10.0968L4.1799 8.8855Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </svg>
  );
};
