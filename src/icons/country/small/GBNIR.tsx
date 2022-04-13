import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GBNIR = () => {
  const ids = useStableUniqueId(4);
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
          fill="#2E42A5"
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
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="12"
          >
            <rect width="16" height="12" fill="white" />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              d="M-1.78149 11.1426L1.73935 12.6316L16.08 1.61878L17.9371 -0.593959L14.1721 -1.09164L8.3229 3.6541L3.6149 6.85161L-1.78149 11.1426Z"
              fill="white"
            />
            <path
              d="M-1.29944 12.1859L0.494269 13.05L17.2703 -0.799421H14.7517L-1.29944 12.1859Z"
              fill="#F50100"
            />
            <path
              d="M17.7816 11.1426L14.2608 12.6316L-0.0798473 1.61878L-1.93701 -0.593959L1.82802 -1.09164L7.67722 3.6541L12.3852 6.85161L17.7816 11.1426Z"
              fill="white"
            />
            <path
              d="M17.6615 11.8913L15.8678 12.7554L8.72439 6.82569L6.60652 6.16318L-2.11569 -0.586414H0.40288L9.1202 6.00298L11.4357 6.7974L17.6615 11.8913Z"
              fill="#F50100"
            />
            <mask id={`${ids[3]}`} fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.88892 -1H6.11114V4H-0.986206V8H6.11114V13H9.88892V8H17.0138V4H9.88892V-1Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.88892 -1H6.11114V4H-0.986206V8H6.11114V13H9.88892V8H17.0138V4H9.88892V-1Z"
              fill="#F50100"
            />
            <path
              d="M6.11114 -1V-2H5.11114V-1H6.11114ZM9.88892 -1H10.8889V-2H9.88892V-1ZM6.11114 4V5H7.11114V4H6.11114ZM-0.986206 4V3H-1.98621V4H-0.986206ZM-0.986206 8H-1.98621V9H-0.986206V8ZM6.11114 8H7.11114V7H6.11114V8ZM6.11114 13H5.11114V14H6.11114V13ZM9.88892 13V14H10.8889V13H9.88892ZM9.88892 8V7H8.88892V8H9.88892ZM17.0138 8V9H18.0138V8H17.0138ZM17.0138 4H18.0138V3H17.0138V4ZM9.88892 4H8.88892V5H9.88892V4ZM6.11114 0H9.88892V-2H6.11114V0ZM7.11114 4V-1H5.11114V4H7.11114ZM-0.986206 5H6.11114V3H-0.986206V5ZM0.0137939 8V4H-1.98621V8H0.0137939ZM6.11114 7H-0.986206V9H6.11114V7ZM7.11114 13V8H5.11114V13H7.11114ZM9.88892 12H6.11114V14H9.88892V12ZM8.88892 8V13H10.8889V8H8.88892ZM17.0138 7H9.88892V9H17.0138V7ZM16.0138 4V8H18.0138V4H16.0138ZM9.88892 5H17.0138V3H9.88892V5ZM8.88892 -1V4H10.8889V-1H8.88892Z"
              fill="white"
              mask={`url(#${ids[3]})`}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
