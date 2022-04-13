import React from 'react';

import { useStableUniqueId } from 'hooks';

export const MH = () => {
  const ids = useStableUniqueId(2);
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
          fill="#3D58DB"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 6.875L4.48938 8.71507L4.49413 6.80547L3.506 8.43954L4.02578 6.60204L2.63342 7.90892L3.62968 6.27979L1.93636 7.16255L3.33522 5.86262L1.46652 6.2558L3.16422 5.38148L1.25874 5.25591L3.12937 4.87205L1.32843 4.23704L3.23326 4.3721L1.67043 3.27476L3.46818 3.91872L2.25937 2.44043L3.81671 3.54554L3.05156 1.79593L4.253 3.28023L3.98826 1.38906L4.74469 3.14246L5 1.25L5.25531 3.14246L6.01174 1.38906L5.747 3.28023L6.94844 1.79593L6.18329 3.54554L7.74063 2.44043L6.53182 3.91872L8.32957 3.27476L6.76674 4.3721L8.67157 4.23704L6.87063 4.87205L8.74126 5.25591L6.83578 5.38148L8.53348 6.2558L6.66478 5.86262L8.06364 7.16255L6.37032 6.27979L7.36658 7.90892L5.97422 6.60204L6.494 8.43954L5.50587 6.80547L5.51062 8.71507L5 6.875Z"
            fill="#F7FCFF"
          />
          <path
            d="M-0.48877 15.4658L20.7864 0.759277V5.55351L-0.48877 15.4658Z"
            fill="white"
          />
          <path
            d="M-0.48877 15.4658L20.7864 -2.99072V1.80351L-0.48877 15.4658Z"
            fill="#E2AE57"
          />
        </g>
      </g>
    </svg>
  );
};
