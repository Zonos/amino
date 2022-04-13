import React from 'react';

import { useStableUniqueId } from 'hooks';

export const NP = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="24" fill="white" />
      <path
        d="M11.6159 12.3201L20.9325 23.5H0.5V0.842271L20.0392 11.5H12H10.9325L11.6159 12.3201Z"
        fill="#C51918"
        stroke="#4857A1"
      />
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="22"
        height="24"
      >
        <path
          d="M11.6159 12.3201L20.9325 23.5H0.5V0.842271L20.0392 11.5H12H10.9325L11.6159 12.3201Z"
          fill="white"
          stroke="white"
        />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.82963 20.0102L4.60446 21.6003L4.54791 19.5938L2.6221 20.16L3.75576 18.5035L1.86491 17.8296L3.75576 17.1558L2.6221 15.4992L4.54791 16.0655L4.60446 14.059L5.82963 15.649L7.0548 14.059L7.11135 16.0655L9.03716 15.4992L7.9035 17.1558L9.79435 17.8296L7.9035 18.5035L9.03716 20.16L7.11135 19.5938L7.0548 21.6003L5.82963 20.0102Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.80005 8.1388L5.16021 8.96921L5.13068 7.92131L4.12494 8.21704L4.71698 7.35191L3.7295 7L4.71698 6.64809L4.12494 5.78296L5.13068 6.07869L5.16021 5.03079L5.80005 5.8612L6.43988 5.03079L6.46942 6.07869L7.47516 5.78296L6.88312 6.64809L7.8706 7L6.88312 7.35191L7.47516 8.21704L6.46942 7.92131L6.43988 8.96921L5.80005 8.1388Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.66618 7.89414C7.8925 7.90303 9.0795 6.64004 9.0795 6.64004C9.31432 8.0812 7.5013 9.04004 5.68788 9.04004C3.87445 9.04004 2.77652 7.73302 2.1001 6.64004C2.1001 6.64004 3.43986 7.88525 5.66618 7.89414Z"
          fill="#F9FAFA"
        />
      </g>
    </svg>
  );
};
