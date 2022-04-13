import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BQSE = () => {
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
          d="M0 0H20V15H0V0Z"
          fill="#00268D"
        />
        <path
          d="M0.625 0.625H19.375V14.375H0.625V0.625Z"
          fill="#00268D"
          stroke="#E31D1C"
          strokeWidth="1.25"
        />
        <rect x="9.375" width="1.25" height="15" fill="#E31D1C" />
        <rect
          y="8.125"
          width="1.25"
          height="20"
          transform="rotate(-90 0 8.125)"
          fill="#E31D1C"
        />
        <path
          d="M10.2795 3.81598L10 3.67623L9.72049 3.81598L3.47049 6.94098L2.35246 7.5L3.47049 8.05902L9.72049 11.184L10 11.3238L10.2795 11.184L16.5295 8.05902L17.6475 7.5L16.5295 6.94098L10.2795 3.81598Z"
          fill="white"
          stroke="#E31D1C"
          strokeWidth="1.25"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="2"
          width="20"
          height="11"
        >
          <path
            d="M10.2795 3.81598L10 3.67623L9.72049 3.81598L3.47049 6.94098L2.35246 7.5L3.47049 8.05902L9.72049 11.184L10 11.3238L10.2795 11.184L16.5295 8.05902L17.6475 7.5L16.5295 6.94098L10.2795 3.81598Z"
            fill="white"
            stroke="white"
            strokeWidth="1.25"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M7.25552 10C7.42365 10 15.625 10 15.625 10L14.7401 9.04289C14.7401 9.04289 12.9705 7.15039 12.8566 7.06366C12.7428 6.97692 12.5546 6.93949 12.3405 7.21515C12.1264 7.49081 12.0037 7.06366 11.8254 7.06366C11.6472 7.06366 11.5718 7.06366 11.3132 7.41734C11.0546 7.77102 10.1233 9.04289 10.1233 9.04289H8.7547C8.7547 9.04289 8.52383 8.83396 8.39225 8.90851C8.26068 8.98306 7.51952 8.08393 7.25552 8.01676C6.99152 7.94958 6.81782 8.26048 6.81782 8.50788C6.81782 8.75529 6.6936 8.28118 6.44101 8.42035C6.18842 8.55951 6.26985 8.90851 6.26985 8.90851C6.26985 8.90851 7.08739 10 7.25552 10Z"
            fill="#059334"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75318 7.03415L9.13564 7.5L9.36224 6.73048L8.75 6.25943H9.51276L9.75318 5.5L10.008 6.25943H10.75L10.1431 6.73048L10.3738 7.5L9.75318 7.03415Z"
            fill="#FEDA00"
          />
        </g>
      </g>
    </svg>
  );
};
