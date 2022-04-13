import React from 'react';

import { useStableUniqueId } from 'hooks';

export const MZ = () => {
  const ids = useStableUniqueId(3);
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
          d="M0 0V12H16V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H16V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V4H16V0H0Z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8V12H16V8H0Z"
            fill="#009933"
          />
          <path
            d="M0 3.5H-0.5V4V8V8.5H0H16H16.5V8V4V3.5H16H0Z"
            fill="#272727"
            stroke="white"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12L9 6L0 0Z"
          fill="#F50100"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="9"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12L9 6L0 0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.03445 7.17661L2.14498 8.70184L3.01167 6.66353L1.52246 5.22942H3.28026L4.00156 3.5L4.76765 5.22942H6.52246L4.95459 6.66353L5.73926 8.70184L4.03445 7.17661Z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.07802 5.99202L2.75757 7.06225C2.75757 7.06225 3.83939 7.05154 3.96932 7.16085C4.36082 6.91673 5.1668 7.06225 5.1668 7.06225L4.73811 5.91688C4.73811 5.91688 4.19459 5.6706 3.96932 5.80563C3.41718 5.68091 3.07802 5.99202 3.07802 5.99202Z"
            fill="#F7FCFF"
          />
          <path
            d="M5.78196 7.60816C5.86501 7.71846 5.84293 7.8752 5.73263 7.95826C5.62233 8.04131 5.46559 8.01923 5.38253 7.90893L3.29249 5.13331C3.20944 5.02301 3.23152 4.86627 3.34182 4.78321C3.45212 4.70016 3.60886 4.72224 3.69191 4.83254L5.78196 7.60816Z"
            fill="black"
          />
          <path
            d="M3.48711 4.91993L3.28711 4.67993"
            stroke="black"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.80237 4.68115L2.19812 5.64882L2.50025 6.17217L3.19134 5.14505L3.31564 4.82745L3.19134 4.68115H2.80237Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.01953 7.55426L2.48393 8.09351L5.99812 4.02148L4.40075 5.01732L2.01953 7.55426Z"
            fill="black"
          />
        </g>
      </g>
    </svg>
  );
};
