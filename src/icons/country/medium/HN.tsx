import React from 'react';

import { useStableUniqueId } from 'hooks';

export const HN = () => {
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
          d="M0 0V15H20V0H0Z"
          fill="#F7FCFF"
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V5H20V0H0Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 10V15H20V10H0Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5113 8.20752L9.7766 8.59379L9.91692 7.77566L9.32251 7.13657H10.144L10.5113 6.33252L10.8787 7.13657H11.7002L11.1057 7.77566L11.2461 8.59379L10.5113 8.20752Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.76133 6.95752L6.0266 7.34379L6.16692 6.52566L5.57251 5.88657H6.39396L6.76133 5.08252L7.1287 5.88657H7.95015L7.35574 6.52566L7.49606 7.34379L6.76133 6.95752Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.76133 9.45752L6.0266 9.84379L6.16692 9.02566L5.57251 8.38657H6.39396L6.76133 7.58252L7.1287 8.38657H7.95015L7.35574 9.02566L7.49606 9.84379L6.76133 9.45752Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2613 6.95752L13.5266 7.34379L13.6669 6.52566L13.0725 5.88657H13.894L14.2613 5.08252L14.6287 5.88657H15.4502L14.8557 6.52566L14.9961 7.34379L14.2613 6.95752Z"
            fill="#4564F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2613 9.45752L13.5266 9.84379L13.6669 9.02566L13.0725 8.38657H13.894L14.2613 7.58252L14.6287 8.38657H15.4502L14.8557 9.02566L14.9961 9.84379L14.2613 9.45752Z"
            fill="#4564F9"
          />
        </g>
      </g>
    </svg>
  );
};
