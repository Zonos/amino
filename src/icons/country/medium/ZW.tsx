import React from 'react';

import { useStableUniqueId } from 'hooks';

export const ZW = () => {
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
          fill="#F7FCFF"
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
            d="M0 1.25V13.75H20V1.25H0Z"
            fill="#FECA00"
          />
          <path
            d="M0 5.15625H-1.09375V6.25V8.75V9.84375H0H20H21.0938V8.75V6.25V5.15625H20H0Z"
            fill="#272727"
            stroke="#E31D1C"
            strokeWidth="2.1875"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2.5V0H20V2.5H0ZM0 15V12.5H20V15H0Z"
            fill="#5EAA22"
          />
        </g>
        <path
          d="M0.373101 -0.501419L-0.625 -1.2441V0V15V16.2256L0.367014 15.5059L10.5741 8.10086L11.2626 7.60135L10.5802 7.09355L0.373101 -0.501419Z"
          fill="#F7FCFF"
          stroke="#272727"
          strokeWidth="1.25"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="-2"
          y="-3"
          width="15"
          height="21"
        >
          <path
            d="M0.373101 -0.501419L-0.625 -1.2441V0V15V16.2256L0.367014 15.5059L10.5741 8.10086L11.2626 7.60135L10.5802 7.09355L0.373101 -0.501419Z"
            fill="white"
            stroke="white"
            strokeWidth="1.25"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.67404 8.92389L2.31221 10.8304L3.39557 8.28254L1.53406 6.4899H3.73131L4.63293 4.32812L5.59054 6.4899H7.78406L5.82421 8.28254L6.80506 10.8304L4.67404 8.92389Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.13607 5.26341C3.13607 5.26341 3.10178 5.18075 3.30417 5.10766C3.50656 5.03458 3.5683 4.87971 3.72695 4.99369C3.88561 5.10766 3.98486 4.87851 4.03038 5.20718C4.0759 5.53584 4.20137 6.05411 4.20137 6.05411L6.2561 7.59827H5.87005C5.87005 7.59827 5.2689 8.48151 5.36815 9.25648C5.36815 9.25648 4.95338 9.19339 4.39118 9.19339C3.82899 9.19339 3.46076 9.32812 3.46076 9.32812L3.13607 8.12582C3.13607 8.12582 3.25364 7.92384 3.30417 7.76105C3.35471 7.59827 3.56397 7.56822 3.56397 7.43872C3.56397 7.30923 3.35756 7.20067 3.46076 6.86546C3.56397 6.53025 3.56397 5.5275 3.56397 5.5275C3.56397 5.5275 3.2378 5.38407 3.30417 5.38407C3.37055 5.38407 3.52185 5.26341 3.41301 5.26341C3.30417 5.26341 3.13607 5.26341 3.13607 5.26341Z"
            fill="#FECA00"
          />
        </g>
      </g>
    </svg>
  );
};
