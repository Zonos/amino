import React from 'react';

import { useStableUniqueId } from 'hooks';

export const DO = () => {
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
          fill="#C51918"
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
            d="M8.75 0H11.25V6.25H20V8.75H11.25V15H8.75V8.75H0V6.25H8.75V0Z"
            fill="#F7FCFF"
          />
          <rect width="8.75" height="6.25" fill="#4257BF" />
          <rect x="11.25" y="8.75" width="8.75" height="6.25" fill="#4257BF" />
          <path
            d="M8.52301 6.94409L9.14517 7.00364C9.03868 8.11621 9.17706 8.585 9.40193 8.585V9.21C8.62419 9.21 8.38401 8.39637 8.52301 6.94409Z"
            fill="#309404"
          />
          <path
            d="M11.5167 6.94409L10.8945 7.00364C11.001 8.11621 10.8626 8.585 10.6377 8.585V9.21C11.4155 9.21 11.6557 8.39637 11.5167 6.94409Z"
            fill="#309404"
          />
          <rect
            x="9.20447"
            y="6.68262"
            width="0.590909"
            height="0.923077"
            fill="#003994"
          />
          <path
            d="M10.1135 7.77881H10.7044V8.24734C10.7044 8.49838 10.5009 8.70189 10.2499 8.70189H10.1135V7.77881Z"
            fill="#003994"
          />
          <rect
            x="10.0681"
            y="6.625"
            width="0.590909"
            height="0.923077"
            fill="#DE2110"
          />
          <path
            d="M9.20447 7.77881H9.79538V8.70189H9.65901C9.40797 8.70189 9.20447 8.49838 9.20447 8.24734V7.77881Z"
            fill="#DE2110"
          />
          <path
            d="M8.95894 6.63085L8.54089 6.16624C8.98236 5.76902 9.44246 5.5625 9.9163 5.5625C10.3902 5.5625 10.8502 5.76902 11.2917 6.16624L10.8737 6.63085C10.5393 6.33001 10.2218 6.1875 9.9163 6.1875C9.61079 6.1875 9.29329 6.33001 8.95894 6.63085Z"
            fill="#00319C"
          />
          <path
            d="M9.00447 9.74633L8.58643 9.28172C9.02789 8.8845 9.48799 8.67798 9.96184 8.67798C10.4357 8.67798 10.8958 8.8845 11.3372 9.28172L10.9192 9.74633C10.5849 9.44549 10.2674 9.30298 9.96184 9.30298C9.65632 9.30298 9.33882 9.44549 9.00447 9.74633Z"
            fill="#DE2110"
          />
        </g>
      </g>
    </svg>
  );
};
