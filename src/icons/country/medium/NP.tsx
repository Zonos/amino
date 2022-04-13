import React from 'react';

import { useStableUniqueId } from 'hooks';

export const NP = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${ids[1]})`}>
        <rect width="20" height="15" fill="white" />
        <path
          d="M7.11834 7.93832L12.6718 14.4999H0.5V0.977849L12.001 7.1153H7.5H6.42178L7.11834 7.93832Z"
          fill="#C51918"
          stroke="#4857A1"
        />
        <mask
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="14"
          height="15"
        >
          <path
            d="M7.11834 7.93832L12.6718 14.4999H0.5V0.977849L12.001 7.1153H7.5H6.42178L7.11834 7.93832Z"
            fill="white"
            stroke="white"
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.64352 12.5448L2.87779 13.5233L2.84244 12.2885L1.63881 12.637L2.34735 11.6176L1.16557 11.2029L2.34735 10.7882L1.63881 9.76879L2.84244 10.1173L2.87779 8.88247L3.64352 9.86098L4.40925 8.88247L4.4446 10.1173L5.64822 9.76879L4.93969 10.7882L6.12147 11.2029L4.93969 11.6176L5.64822 12.637L4.4446 12.2885L4.40925 13.5233L3.64352 12.5448Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.625 5.23919L3.2251 5.75021L3.20664 5.10535L2.57805 5.28733L2.94808 4.75495L2.3309 4.53839L2.94808 4.32183L2.57805 3.78944L3.20664 3.97143L3.2251 3.32656L3.625 3.83758L4.0249 3.32656L4.04336 3.97143L4.67195 3.78944L4.30192 4.32183L4.9191 4.53839L4.30192 4.75495L4.67195 5.28733L4.04336 5.10535L4.0249 5.75021L3.625 5.23919Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5407 5.08899C4.91074 5.09455 5.64121 4.30518 5.64121 4.30518C5.78571 5.2059 4.67001 5.80518 3.55406 5.80518C2.4381 5.80518 1.76245 4.98829 1.34619 4.30518C1.34619 4.30518 2.17066 5.08343 3.5407 5.08899Z"
            fill="#F9FAFA"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[1]}`}>
          <path
            d="M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V13C20 14.1046 19.1046 15 18 15H2C0.895431 15 0 14.1046 0 13V2Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
