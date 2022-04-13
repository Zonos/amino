import React from 'react';

export const BG = () => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="d5c3695e-7886-4257-9383E88bc1add42a"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <rect width="16" height="12" fill="white" />
      </mask>
      <g mask="url(#d5c3695e-7886-4257-9383E88bc1add42a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="#5EAA22"
        />
        <mask
          id="46d94c9b-7187-4bd2Bf0f-8fc255aa8663"
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
        <g mask="url(#46d94c9b-7187-4bd2Bf0f-8fc255aa8663)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V4H16V0H0Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8V12H16V8H0Z"
            fill="#E22C18"
          />
        </g>
      </g>
    </svg>
  );
};
