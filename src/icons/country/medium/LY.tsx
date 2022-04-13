import React from 'react';

import { useStableUniqueId } from 'hooks';

export const LY = () => {
  const ids = useStableUniqueId(1);
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
          d="M0 11H20V15H0V11Z"
          fill="#55BA07"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3.75H20V11.25H0V3.75Z"
          fill="#1D1D1D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V4H0V0Z"
          fill="#E11C1B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.87348 9.41609C8.75343 9.18459 8.46284 8.59851 8.47485 7.69449C8.47485 6.73792 8.97855 5.7697 9.86208 5.66385C10.7456 5.55799 11.4692 5.88757 11.8486 6.34748C11.5313 5.09904 10.4803 4.96249 9.67339 4.96249C8.45852 4.95188 7.21252 5.87503 7.21252 7.6116C7.21252 9.12451 8.31081 10.262 9.70847 10.2902C11.4558 10.2902 11.7293 9.08352 11.7796 8.67244C11.6785 8.74495 11.5845 8.83149 11.488 8.92033C11.1366 9.24379 10.7522 9.59771 9.87348 9.41609ZM12.6644 7.05689L11.837 7.31726L12.7636 7.67985L12.6346 8.65106L13.2626 7.98279L14.1737 8.17039L13.5581 7.45051L14.1031 6.71487L13.3421 6.87547L12.8044 6.26785L12.6644 7.05689Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
