import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BB = () => {
  const ids = useStableUniqueId(1);
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
          d="M22 0H32V24H22V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0H22V24H10V0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H10V24H0V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.612 15.6678C18.8 14.3783 20.1328 11.5754 20.1328 11.5754L20.7509 9.9308L18.3012 10.7257L18.8809 11.0274L17.7464 14.2258L16.8895 14.0213V7.85257L17.5674 7.80307L15.8953 5.37158L14.2628 7.85257H15.0505V14.0213L14.0852 14.1827L13.3967 10.9479L13.7942 10.6148L11.1289 10.1234L11.9246 11.5917C11.9246 11.5917 12.9956 14.1083 13.3967 15.6678L15.0505 15.5404V17.9375H16.8895V15.5404L18.612 15.6678Z"
          fill="black"
        />
      </g>
    </svg>
  );
};
