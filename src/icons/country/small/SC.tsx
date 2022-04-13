import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SC = () => {
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
          fill="#2E42A5"
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
            d="M0 11.9983L8.07551 -1H16.151L0 11.9983Z"
            fill="#FFD018"
          />
          <path
            d="M0 11.9982L17.2316 5.49904V-2.55176L0 11.9982Z"
            fill="#E31D1C"
          />
          <path
            d="M0 11.9982L17.2316 9.49904V5.44824L0 11.9982Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11.9982H17.2316V8.44824L0 11.9982Z"
            fill="#5EAA22"
          />
        </g>
      </g>
    </svg>
  );
};
