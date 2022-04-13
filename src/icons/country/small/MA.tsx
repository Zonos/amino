import React from 'react';

import { useStableUniqueId } from 'hooks';

export const MA = () => {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H16V11C16 11.5523 15.5523 12 15 12H1C0.447715 12 0 11.5523 0 11V0Z"
          fill="#C51918"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H16V12H0V0Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.241 9.81312L8.08291 1.35034H7.94588L4.89758 9.81312L8.06327 7.91054L11.241 9.81312ZM7.7333 4.11105L8.07186 2.79188L8.4232 4.14884L9.43252 6.97708L10.0251 8.34635L8.74575 7.44501L8.06254 7.03595L7.39034 7.43994L6.14067 8.34635L6.71838 6.94902L7.7333 4.11105Z"
          fill="#579D20"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.33127 6.73651L8.07924 7.89847L9.71032 6.73651L12.8082 4.11816H3.19263L6.33127 6.73651ZM6.36754 5.73699L5.17874 5.00951H6.62908H9.51095H10.7903L9.76986 5.65588L8.07164 6.94436L6.36754 5.73699Z"
          fill="#579D20"
        />
      </g>
    </svg>
  );
};
