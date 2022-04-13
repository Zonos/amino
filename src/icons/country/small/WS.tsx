import React from 'react';

import { useStableUniqueId } from 'hooks';

export const WS = () => {
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
          fill="#C51918"
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
            d="M0 0V7H8V0H0Z"
            fill="#2E42A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.78282 3.88588L1.2528 4.20586L1.37369 3.58146L0.932312 3.11416L1.52997 3.08889L1.78282 2.50586L2.03568 3.08889H2.63231L2.19195 3.58146L2.32452 4.20586L1.78282 3.88588Z"
            fill="#FEFFFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.78282 3.88588L5.2528 4.20586L5.37369 3.58146L4.93231 3.11416L5.52997 3.08889L5.78282 2.50586L6.03568 3.08889H6.63231L6.19195 3.58146L6.32452 4.20586L5.78282 3.88588Z"
            fill="#FEFFFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.73279 2.06887L3.23394 2.37002L3.34773 1.78235L2.93231 1.34254L3.49481 1.31876L3.73279 0.77002L3.97077 1.31876H4.53231L4.11785 1.78235L4.24263 2.37002L3.73279 2.06887Z"
            fill="#FEFFFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.27313 4.21266L3.96135 4.40088L4.03246 4.03359L3.77283 3.7587L4.12439 3.74384L4.27313 3.40088L4.42186 3.74384H4.77283L4.51379 4.03359L4.59178 4.40088L4.27313 4.21266Z"
            fill="#FEFFFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.70438 6.41409L2.95611 6.86582L3.12679 5.98432L2.50366 5.3246L3.34741 5.28893L3.70438 4.46582L4.06135 5.28893H4.90366L4.28197 5.98432L4.46914 6.86582L3.70438 6.41409Z"
            fill="#FEFFFF"
          />
        </g>
      </g>
    </svg>
  );
};
