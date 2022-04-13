import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BF = () => {
  const ids = useStableUniqueId(2);
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
          d="M0 0V24H32V0H0Z"
          fill="#5EAA22"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24H32V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H32V0H0Z"
            fill="#C51918"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0354 15.7705L11.3324 19.3298L12.8372 13.5329L8.42627 10.0036H13.6836L16.0347 4.85767L18.3859 10.0036H23.6432L19.1854 13.5375L20.737 19.3298L16.0354 15.7705Z"
            fill="#FECA00"
          />
        </g>
      </g>
    </svg>
  );
};
