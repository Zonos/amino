import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GL = () => {
  const ids = useStableUniqueId(3);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12H32V24H0V12Z"
          fill="#C51918"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="12"
          width="32"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 12H32V24H0V12Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
            fill="#F7FCFF"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H32V12H0V0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H32V12H0V0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
            fill="#C51918"
          />
        </g>
      </g>
    </svg>
  );
};
