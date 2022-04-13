import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CG = () => {
  const ids = useStableUniqueId(2);
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
          d="M20 0V15H0L20 0Z"
          fill="#FA1111"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15V0H20L0 15Z"
          fill="#07A907"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4323 -3.625L-0.625 14.7351L3.15727 16.6175L21.6504 -0.132492L18.4323 -3.625Z"
          fill="#FBCD17"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="-4"
          width="23"
          height="21"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4323 -3.625L-0.625 14.7351L3.15727 16.6175L21.6504 -0.132492L18.4323 -3.625Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`} />
      </g>
    </svg>
  );
};
