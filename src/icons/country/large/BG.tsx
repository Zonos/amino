import React from 'react';

export const BG = () => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="ee743706-0432-44fb-86f1-0ba6596a9ff5"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask="url(#ee743706-0432-44fb-86f1-0ba6596a9ff5)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V24H32V0H0Z"
          fill="#5EAA22"
        />
        <mask
          id="43f6e2b5-464d-490cA4e7-9d5d0614d2ae"
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
        <g mask="url(#43f6e2b5-464d-490cA4e7-9d5d0614d2ae)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V8H32V0H0Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16V24H32V16H0Z"
            fill="#E22C18"
          />
        </g>
      </g>
    </svg>
  );
};
