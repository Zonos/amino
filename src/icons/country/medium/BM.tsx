import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BM = () => {
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
          fill="#AF0100"
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
            d="M13.7548 7.5C13.7548 11.1792 14.103 12.4571 16.1999 12.4571C18.2969 12.4571 18.8706 10.6035 18.6936 7.5H13.7548Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3126 9.625C16.8994 9.625 17.3751 9.06536 17.3751 8.375C17.3751 7.68464 16.8994 7.125 16.3126 7.125C15.7258 7.125 15.2501 7.68464 15.2501 8.375C15.2501 9.06536 15.7258 9.625 16.3126 9.625Z"
            fill="#AF0100"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2458 11.4463C14.6194 12.2796 15.2729 12.6963 16.2064 12.6963C17.1335 12.6963 17.7891 12.2852 18.1732 11.463L14.2458 11.4463Z"
            fill="#5EAA22"
          />
          <path
            d="M14.7621 9.39411L14.4132 8.52394C15.0535 8.26723 15.6708 8.13721 16.264 8.13721C16.8571 8.13721 17.4744 8.26723 18.1147 8.52394L17.7658 9.39411C17.232 9.18006 16.7317 9.07471 16.264 9.07471C15.7962 9.07471 15.296 9.18006 14.7621 9.39411Z"
            fill="#82B2CB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.625 10C15.9702 10 16.25 9.72018 16.25 9.375C16.25 9.02982 15.9702 8.75 15.625 8.75C15.2798 8.75 15 9.02982 15 9.375C15 9.72018 15.2798 10 15.625 10Z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 11C16.3452 11 16.625 10.7202 16.625 10.375C16.625 10.0298 16.3452 9.75 16 9.75C15.6548 9.75 15.375 10.0298 15.375 10.375C15.375 10.7202 15.6548 11 16 11Z"
            fill="#8A4E22"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 10.5C15.3452 10.5 15.625 10.2202 15.625 9.875C15.625 9.52982 15.3452 9.25 15 9.25C14.6548 9.25 14.375 9.52982 14.375 9.875C14.375 10.2202 14.6548 10.5 15 10.5Z"
            fill="#AF0100"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1251 10.5C17.4703 10.5 17.7501 10.2202 17.7501 9.875C17.7501 9.52982 17.4703 9.25 17.1251 9.25C16.7799 9.25 16.5001 9.52982 16.5001 9.875C16.5001 10.2202 16.7799 10.5 17.1251 10.5Z"
            fill="#AF0100"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6875 11.875C16.9291 11.875 17.125 11.5952 17.125 11.25C17.125 10.9048 16.9291 10.625 16.6875 10.625C16.4459 10.625 16.25 10.9048 16.25 11.25C16.25 11.5952 16.4459 11.875 16.6875 11.875Z"
            fill="#AF0100"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.1875 11.875C15.4291 11.875 15.625 11.5952 15.625 11.25C15.625 10.9048 15.4291 10.625 15.1875 10.625C14.9459 10.625 14.75 10.9048 14.75 11.25C14.75 11.5952 14.9459 11.875 15.1875 11.875Z"
            fill="#AF0100"
          />
          <rect width="11" height="9" fill="#2E42A5" />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="11"
            height="9"
          >
            <rect width="11" height="9" fill="white" />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              d="M-1.25269 8.12494L1.22291 9.21069L11.3062 1.18052L12.612 -0.432938L9.96468 -0.795827L5.85197 2.6646L2.54165 4.99613L-1.25269 8.12494Z"
              fill="white"
            />
            <path
              d="M-0.913818 8.88555L0.347383 9.51562L12.143 -0.582947H10.3721L-0.913818 8.88555Z"
              fill="#F50100"
            />
            <path
              d="M12.5027 8.1248L10.3056 9.52051L-0.0561562 1.18038L-1.36198 -0.433076L1.28532 -0.795966L5.39803 2.66447L8.70835 4.99599L12.5027 8.1248Z"
              fill="white"
            />
            <path
              d="M12.4182 8.6707L11.157 9.30078L6.13431 4.97706L4.64518 4.49398L-1.48763 -0.427604H0.283246L6.41261 4.37716L8.04071 4.95642L12.4182 8.6707Z"
              fill="#F50100"
            />
            <mask
              id={`${ids[3]}`}
              maskUnits="userSpaceOnUse"
              x="-1"
              y="-1"
              width="13"
              height="11"
              fill="black"
            >
              <rect fill="white" x="-1" y="-1" width="13" height="11" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0H5V4H0V5H5V9H6V5H11V4H6V0Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 0H5V4H0V5H5V9H6V5H11V4H6V0Z"
              fill="#F50100"
            />
            <path
              d="M5 0V-0.9375H4.0625V0H5ZM6 0H6.9375V-0.9375H6V0ZM5 4V4.9375H5.9375V4H5ZM0 4V3.0625H-0.9375V4H0ZM0 5H-0.9375V5.9375H0V5ZM5 5H5.9375V4.0625H5V5ZM5 9H4.0625V9.9375H5V9ZM6 9V9.9375H6.9375V9H6ZM6 5V4.0625H5.0625V5H6ZM11 5V5.9375H11.9375V5H11ZM11 4H11.9375V3.0625H11V4ZM6 4H5.0625V4.9375H6V4ZM5 0.9375H6V-0.9375H5V0.9375ZM5.9375 4V0H4.0625V4H5.9375ZM0 4.9375H5V3.0625H0V4.9375ZM0.9375 5V4H-0.9375V5H0.9375ZM5 4.0625H0V5.9375H5V4.0625ZM5.9375 9V5H4.0625V9H5.9375ZM6 8.0625H5V9.9375H6V8.0625ZM5.0625 5V9H6.9375V5H5.0625ZM11 4.0625H6V5.9375H11V4.0625ZM10.0625 4V5H11.9375V4H10.0625ZM6 4.9375H11V3.0625H6V4.9375ZM5.0625 0V4H6.9375V0H5.0625Z"
              fill="#F7FCFF"
              mask={`url(#${ids[3]})`}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
