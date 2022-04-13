import React from 'react';

import { useStableUniqueId } from 'hooks';

export const AW = () => {
  const ids = useStableUniqueId(3);
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
          d="M0 0V15H20V0H0Z"
          fill="#5BA3DA"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <g filter={`url(#${ids[2]})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.54586 4.97482L0.807739 4.39687L3.57961 3.84839L4.38139 0.979736L5.01367 3.8251L7.48827 4.39965L5.04277 4.97482L4.33713 7.31451L3.54586 4.97482Z"
              fill="#EF2929"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.54586 4.97482L0.807739 4.39687L3.57961 3.84839L4.38139 0.979736L5.01367 3.8251L7.48827 4.39965L5.04277 4.97482L4.33713 7.31451L3.54586 4.97482Z"
              fill="#FF0000"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 9H0V10H20V9ZM20 11H0V12H20V11Z"
            fill="#FAD615"
          />
        </g>
      </g>
      <defs>
        <filter
          id={`${ids[2]}`}
          x="-0.192261"
          y="-0.0202637"
          width="8.68054"
          height="8.33472"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_157_71754"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_157_71754"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
