import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GBUKM = () => {
  const ids = useStableUniqueId(4);
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
          fill="#2E42A5"
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
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="15"
          >
            <rect width="20" height="15" fill="white" />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              d="M-2.22693 13.9285L2.17413 15.7898L20.0999 2.02378L22.4214 -0.742144L17.7151 -1.36424L10.4036 4.56793L4.51856 8.56482L-2.22693 13.9285Z"
              fill="white"
            />
            <path
              d="M-1.62439 15.2326L0.617745 16.3127L21.5878 -0.999094H18.4395L-1.62439 15.2326Z"
              fill="#F50100"
            />
            <path
              d="M22.2271 13.9285L17.826 15.7898L-0.0997791 2.02378L-2.42124 -0.742144L2.28506 -1.36424L9.59656 4.56793L15.4816 8.56482L22.2271 13.9285Z"
              fill="white"
            />
            <path
              d="M22.0769 14.8644L19.8348 15.9446L10.9055 8.53248L8.25819 7.70435L-2.64459 -0.732651H0.503632L11.4003 7.50409L14.2947 8.49711L22.0769 14.8644Z"
              fill="#F50100"
            />
            <mask id={`${ids[3]}`} fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3611 -1.25H7.63889V5H-1.23279V10H7.63889V16.25H12.3611V10H21.2672V5H12.3611V-1.25Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3611 -1.25H7.63889V5H-1.23279V10H7.63889V16.25H12.3611V10H21.2672V5H12.3611V-1.25Z"
              fill="#F50100"
            />
            <path
              d="M7.63889 -1.25V-2.5H6.38889V-1.25H7.63889ZM12.3611 -1.25H13.6111V-2.5H12.3611V-1.25ZM7.63889 5V6.25H8.88889V5H7.63889ZM-1.23279 5V3.75H-2.48279V5H-1.23279ZM-1.23279 10H-2.48279V11.25H-1.23279V10ZM7.63889 10H8.88889V8.75H7.63889V10ZM7.63889 16.25H6.38889V17.5H7.63889V16.25ZM12.3611 16.25V17.5H13.6111V16.25H12.3611ZM12.3611 10V8.75H11.1111V10H12.3611ZM21.2672 10V11.25H22.5172V10H21.2672ZM21.2672 5H22.5172V3.75H21.2672V5ZM12.3611 5H11.1111V6.25H12.3611V5ZM7.63889 0H12.3611V-2.5H7.63889V0ZM8.88889 5V-1.25H6.38889V5H8.88889ZM-1.23279 6.25H7.63889V3.75H-1.23279V6.25ZM0.0172119 10V5H-2.48279V10H0.0172119ZM7.63889 8.75H-1.23279V11.25H7.63889V8.75ZM8.88889 16.25V10H6.38889V16.25H8.88889ZM12.3611 15H7.63889V17.5H12.3611V15ZM11.1111 10V16.25H13.6111V10H11.1111ZM21.2672 8.75H12.3611V11.25H21.2672V8.75ZM20.0172 5V10H22.5172V5H20.0172ZM12.3611 6.25H21.2672V3.75H12.3611V6.25ZM11.1111 -1.25V5H13.6111V-1.25H11.1111Z"
              fill="white"
              mask={`url(#${ids[3]})`}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
