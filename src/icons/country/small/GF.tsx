import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GF = () => {
  const ids = useStableUniqueId(1);
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
        <rect width="16" height="12" rx="1" fill="#5EAA22" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L16 12H0V0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.96533 7.20305L6.22251 8.4119L6.77941 6.34142L5.5 5.01881L7.23239 4.94729L7.96533 2.8999L8.69827 4.94729H10.4277L9.15125 6.34142L9.79052 8.28969L7.96533 7.20305Z"
          fill="#E21835"
        />
      </g>
    </svg>
  );
};
