import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SG = () => {
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
            d="M0 0V7.5H20V0H0Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.54277 6.61841C5.54277 6.61841 3.77671 5.90811 3.77671 3.98368C3.77671 2.05926 5.54277 1.3719 5.54277 1.3719C4.68443 1.15461 2.40686 1.34896 2.40686 3.98368C2.40686 6.61841 4.65002 7.11529 5.54277 6.61841ZM5.99525 6.30032L6.50189 5.99446L7.01969 6.30032L6.89297 5.70347L7.3139 5.23263H6.74359L6.50189 4.67532L6.26019 5.23263L5.6889 5.25678L6.11081 5.70347L5.99525 6.30032ZM8.34333 5.96031L7.83669 6.26616L7.95225 5.66931L7.53034 5.22263L8.10163 5.19848L8.34333 4.64116L8.58503 5.19848H9.15534L8.7344 5.66931L8.86113 6.26616L8.34333 5.96031ZM7.05448 3.6061L7.56112 3.30024L8.07893 3.6061L7.9522 3.00924L8.37314 2.53841H7.80282L7.56112 1.9811L7.31943 2.53841L6.74814 2.56256L7.17005 3.00924L7.05448 3.6061ZM5.85613 4.51409L5.34949 4.81995L5.46505 4.2231L5.04314 3.77641L5.61443 3.75226L5.85613 3.19495L6.09783 3.75226H6.66814L6.24721 4.2231L6.37394 4.81995L5.85613 4.51409ZM8.6985 4.79254L9.20514 4.48668L9.72294 4.79254L9.59622 4.19569L10.0172 3.72485H9.44684L9.20514 3.16754L8.96344 3.72485L8.39215 3.749L8.81406 4.19569L8.6985 4.79254Z"
            fill="#F1F9FF"
          />
        </g>
      </g>
    </svg>
  );
};
