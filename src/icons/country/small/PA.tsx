import React from 'react';

import { useStableUniqueId } from 'hooks';

export const PA = () => {
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
            d="M8 0V6H16V0H8Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5105 9.57474L10.3592 10.2871L10.8062 9.09123L9.82764 8.18588H11.0145L11.5105 6.89233L11.8889 8.18588H13.0776L12.2209 9.09123L12.6404 10.2871L11.5105 9.57474Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.51046 4.1824L3.35924 4.89476L3.80617 3.69889L2.82764 2.79355H4.01453L4.51046 1.5L4.88891 2.79355H6.07764L5.22095 3.69889L5.64039 4.89476L4.51046 4.1824Z"
            fill="#2E42A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6V12H8V6H0Z"
            fill="#2E42A5"
          />
        </g>
      </g>
    </svg>
  );
};
