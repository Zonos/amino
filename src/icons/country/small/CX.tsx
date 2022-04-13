import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CX = () => {
  const ids = useStableUniqueId(1);
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
          d="M0 0H16V12H0V0Z"
          fill="#5EAA22"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L16 12H0V0Z"
          fill="#4141DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 4.5L2.5 4.86603L2.56699 4.25L2 4L2.56699 3.75L2.5 3.13397L3 3.5L3.5 3.13397L3.43301 3.75L4 4L3.43301 4.25L3.5 4.86603L3 4.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 7.5L1.5 7.86603L1.56699 7.25L1 7L1.56699 6.75L1.5 6.13397L2 6.5L2.5 6.13397L2.43301 6.75L3 7L2.43301 7.25L2.5 7.86603L2 7.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 10.5L3.5 10.866L3.56699 10.25L3 10L3.56699 9.75L3.5 9.13397L4 9.5L4.5 9.13397L4.43301 9.75L5 10L4.43301 10.25L4.5 10.866L4 10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 5.75L4.25 5.93301L4.28349 5.625L4 5.5L4.28349 5.375L4.25 5.06699L4.5 5.25L4.75 5.06699L4.71651 5.375L5 5.5L4.71651 5.625L4.75 5.93301L4.5 5.75Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7805 6.11199C10.5936 5.917 12.2756 5.45885 12.4499 4.86808C12.681 4.35374 12.5266 3.93696 11.6536 3.57094C10.7805 3.20491 9.89812 2.49717 10.9127 2.49717C11.9274 2.49717 11.9274 2.64184 12.2 3.06859C12.4725 3.49534 13.0617 3.58675 13.0742 3.06859C13.0742 2.18569 13.1575 2.06694 12.4448 1.29936C11.732 0.531773 14.232 1.61457 14.0254 2.93047C13.8188 4.24637 13.57 3.82176 13.7279 4.04265C13.8858 4.26355 14.836 3.57784 14.7174 4.49125C14.385 5.01657 13.7256 5.7982 10.7805 6.11199Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 8.5C9.38071 8.5 10.5 7.38071 10.5 6C10.5 4.61929 9.38071 3.5 8 3.5C6.61929 3.5 5.5 4.61929 5.5 6C5.5 7.38071 6.61929 8.5 8 8.5Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.47653 5.08108C6.7601 5.01785 7.14787 5.77721 7.84773 5.4924C8.54759 5.2076 8.69375 4.66387 9.02628 4.86287C9.35881 5.06187 9.40245 5.54101 9.18094 5.78183C8.95942 6.02265 8.58352 6.07962 8.58352 6.384C8.58352 6.68838 8.50981 7.77382 8.36615 7.45925C7.93536 7.10972 8.19819 6.553 7.66756 6.384C7.13693 6.215 6.81465 6.22066 6.42322 6.29197C6.03178 6.36329 6.68618 6.09607 6.82497 5.84236C7.10755 5.57051 6.34686 5.17148 6.47653 5.08108Z"
          fill="#548650"
        />
      </g>
    </svg>
  );
};
