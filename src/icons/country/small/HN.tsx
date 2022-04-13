import React from 'react';

import { useStableUniqueId } from 'hooks';

export const HN = () => {
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
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8V12H16V8H0Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.40906 6.56592L7.82128 6.87493L7.93354 6.22043L7.45801 5.70916H8.11517L8.40906 5.06592L8.70296 5.70916H9.36012L8.88459 6.22043L8.99685 6.87493L8.40906 6.56592Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.40906 5.56592L4.82128 5.87493L4.93354 5.22043L4.45801 4.70916H5.11517L5.40906 4.06592L5.70296 4.70916H6.36012L5.88459 5.22043L5.99685 5.87493L5.40906 5.56592Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.40906 7.56592L4.82128 7.87493L4.93354 7.22043L4.45801 6.70916H5.11517L5.40906 6.06592L5.70296 6.70916H6.36012L5.88459 7.22043L5.99685 7.87493L5.40906 7.56592Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4091 5.56592L10.8213 5.87493L10.9335 5.22043L10.458 4.70916H11.1152L11.4091 4.06592L11.703 4.70916H12.3601L11.8846 5.22043L11.9968 5.87493L11.4091 5.56592Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4091 7.56592L10.8213 7.87493L10.9335 7.22043L10.458 6.70916H11.1152L11.4091 6.06592L11.703 6.70916H12.3601L11.8846 7.22043L11.9968 7.87493L11.4091 7.56592Z"
            fill="#4564F9"
          />
        </g>
      </g>
    </svg>
  );
};
