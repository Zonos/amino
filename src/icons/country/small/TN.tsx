import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TN = () => {
  const ids = useStableUniqueId(2);
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
          fill="#E31D1C"
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
            d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.70138 8.82534C8.70138 8.82534 6.59319 8.25016 6.59319 5.98668C6.59319 3.72319 8.70138 3.09872 8.70138 3.09872C7.82963 2.76132 5.27845 3.27901 5.27845 5.98668C5.27845 8.69434 7.9008 9.18198 8.70138 8.82534ZM8.58532 5.49413L7.53939 5.87629L8.66353 6.26924L8.70138 7.3217L9.38552 6.50406L10.5136 6.58414L9.70082 5.92106L10.1903 4.96351L9.23417 5.28533L8.57177 4.45738L8.58532 5.49413Z"
            fill="#E31D1C"
          />
        </g>
      </g>
    </svg>
  );
};
