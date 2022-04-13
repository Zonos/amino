import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TT = () => {
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
          fill="#E31D1C"
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
            d="M18.4675 18.4262L18.1364 18.697L17.844 18.3848L-1.12108 -1.86437L-1.45555 -2.22149L-1.07679 -2.53125L0.858424 -4.11395L1.18956 -4.38477L1.48197 -4.07255L20.447 16.1766L20.7815 16.5338L20.4028 16.8435L18.4675 18.4262Z"
            fill="#272727"
            stroke="#F7FCFF"
            strokeWidth="0.915"
          />
        </g>
      </g>
    </svg>
  );
};
