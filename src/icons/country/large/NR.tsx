import React from 'react';

import { useStableUniqueId } from 'hooks';

export const NR = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V24H32V0H0Z"
        fill="#2E42A5"
      />
      <mask
        id={`${ids[0]}`}
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
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8V12H32V8H0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.82963 19.5796L7.28454 21.5849L7.21322 19.0544L4.78454 19.7686L6.21422 17.6794L3.82963 16.8296L6.21422 15.9798L4.78454 13.8907L7.21322 14.6048L7.28454 12.0743L8.82963 14.0796L10.3747 12.0743L10.446 14.6048L12.8747 13.8907L11.445 15.9798L13.8296 16.8296L11.445 17.6794L12.8747 19.7686L10.446 19.0544L10.3747 21.5849L8.82963 19.5796Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
