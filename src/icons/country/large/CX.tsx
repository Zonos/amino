import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CX = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H32V24H0V0Z"
          fill="#5EAA22"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L32 24H0V0Z"
          fill="#4141DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 9L5 9.73205L5.13397 8.5L4 8L5.13397 7.5L5 6.26795L6 7L7 6.26795L6.86603 7.5L8 8L6.86603 8.5L7 9.73205L6 9Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 15L3 15.7321L3.13397 14.5L2 14L3.13397 13.5L3 12.2679L4 13L5 12.2679L4.86603 13.5L6 14L4.86603 14.5L5 15.7321L4 15Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 21L7 21.7321L7.13397 20.5L6 20L7.13397 19.5L7 18.2679L8 19L9 18.2679L8.86603 19.5L10 20L8.86603 20.5L9 21.7321L8 21Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 11.5L8.5 11.866L8.56699 11.25L8 11L8.56699 10.75L8.5 10.134L9 10.5L9.5 10.134L9.43301 10.75L10 11L9.43301 11.25L9.5 11.866L9 11.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.561 12.224C21.1872 11.834 24.5512 10.9177 24.8999 9.73616C25.362 8.70747 25.0533 7.87392 23.3071 7.14187C21.561 6.40982 19.7962 4.99434 21.8255 4.99434C23.8547 4.99434 23.8547 5.28368 24.3999 6.13718C24.9451 6.99068 26.1234 7.17351 26.1483 6.13718C26.1483 4.37138 26.315 4.13389 24.8895 2.59872C23.464 1.06355 28.464 3.22915 28.0508 5.86094C27.6375 8.49273 27.1399 7.64351 27.4558 8.0853C27.7716 8.52709 29.6721 7.15569 29.4348 8.9825C28.7699 10.0331 27.4513 11.5964 21.561 12.224Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 17C18.7614 17 21 14.7614 21 12C21 9.23858 18.7614 7 16 7C13.2386 7 11 9.23858 11 12C11 14.7614 13.2386 17 16 17Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9531 10.1622C13.5202 10.0357 14.2957 11.5544 15.6955 10.9848C17.0952 10.4152 17.3875 9.32773 18.0526 9.72573C18.7176 10.1237 18.8049 11.082 18.3619 11.5637C17.9188 12.0453 17.167 12.1592 17.167 12.768C17.167 13.3768 17.0196 15.5476 16.7323 14.9185C15.8707 14.2194 16.3964 13.106 15.3351 12.768C14.2739 12.43 13.6293 12.4413 12.8464 12.5839C12.0636 12.7266 13.3724 12.1921 13.6499 11.6847C14.2151 11.141 12.6937 10.343 12.9531 10.1622Z"
          fill="#548650"
        />
      </g>
    </svg>
  );
};
