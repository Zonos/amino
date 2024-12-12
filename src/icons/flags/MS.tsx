import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const MS = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M0 0h640v480H0z" fill="#006" />
      <g fillRule="evenodd">
        <path
          d="M408.3 192.3h214.3l-.3 153.4c1.8 61.7-36.4 100-106.7 117.2-50-12.5-107.5-38.3-107.6-115.5l.3-155.2z"
          fill="#fff"
        />
        <path
          d="M44 22.7h169.4l-.2 120.8c1.4 48.6-28.8 78.7-84.3 92.3-39.5-9.8-85-30.2-85-91l.2-122z"
          fill="#00a2bd"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
        />
        <path
          d="M616.3 361.3c-7.5 56.4-50.7 81.1-100.7 94.2-44.3-12-92-31-101.1-93.9l201.8-.3z"
          fill="#a53d08"
        />
      </g>
      <g fillRule="evenodd" stroke="#000">
        <path
          d="M155.8 197.2s.6 9.3-4.4 14.9c4.5 1.4 7.5-.3 8.9-2 1.4-1.8 1.9-4.1 1.9-4.1s1.2-.8 1.4-2.5c0-2.3-1-2.3-1.8-2.8l.2-5.2s-5.1-3.1-6.2 1.7z"
          fill="#ffc6b5"
          strokeLinejoin="round"
          strokeWidth="1.3"
          transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
        />
        <path
          d="m155.5 210.3-1.5-1.2"
          fill="#ff9a08"
          strokeLinecap="round"
          strokeWidth="1pt"
          transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
        />
      </g>
      <path
        d="M141.6 69.4s.2 5.6-.2 6.2c-.4.6-3.6 2-3.6 2l2.8 5.9 7.7-1.1 3.3-8.7s-1.7-2.9-1.3-6c-2.5-8-8.6 1.7-8.7 1.7z"
        fill="#ffc6b5"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M131.4 203s4.4 4.4 9.3 3.9c11.3-1.3 14.6-11.3 18-11.4s5.7 6 9 5.3a56.2 56.2 0 0 1-5.4-24.7c.5-8 .5-42 .5-42s-5.6-17.6-8.3-20.5a19 19 0 0 0 4.4-13.2V88.9s1.3-1.5 1.2-5.7c-.1-4.2-7.1-10.3-8-10-1 .2-9.9 7.8-10.6 9.6-.8 1.8-1.8-6.5-.1-7.2 1.7-.8-4-1.2-7.5 3-3.6 4.2-2.5 124.7-2.5 124.5z"
        fill="#005121"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="1.3"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="m467.5 224.1 40 .2-.3-18.6 14.6.2.1 18.4h39.8l.2 14.3-40 .2-.3 169.4h-14.2l-.2-169.6-39.7.2V224z"
        fillRule="evenodd"
      />
      <path
        d="M122 82s-2.2-.4-4 0 2.7-19.5 2.7-21.2c1.5-.7 9.2-2 9-7.5-.6-3.2-11.8.2-11.6 4.3-.8 2.1-8.1 23.1-6.7 30 2.6 2 7.4 1.7 10.6 1.1V82z"
        fill="#ffc6b5"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M124.2 53.2s-.6 3.7 2.7 4.3"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth=".6"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="m129.2 53.1-4.4 2.8m4.1-1.1-3 2.2m2-4.7-3.4 2"
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="m95.5 163.6 30.1 31.2c10.5-11.4 3.2-54.3-10.5-62.1-1.6 5-4.4 11.1-7.4 13-6.5 4.5-22.5 9.7-17.2 13 1.2-1.6 4.4-3.2 6 .5 1.7 6-6.7 6.3-6.7 6.3s-5.4-.6-6.3-6c-1-5.5 8-10.5 8.7-10.9.8-.2 12.4-3.3 14.4-13.7 2.4-10.1 5-8.6 5.4-8.8 15.2 1.5 25.2 28.7 25.7 47.9.6 19.1-7.7 31.8-9.3 32.7-1.5.8-36.2-41.3-36.2-41.3l3.3-1.8z"
        fill="#ff9a08"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="m117.5 134.4.1 56.5m-3.5-55.4.2 51.2m-3.9-43.8.2 40.8m-3.2-37.9.2 33.7m-3.4-32.2v28.5m-3.5-26.2V172m-3-20.8v17.3"
        fill="none"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="m95 167.1 31.1 35.6m1.5-58s14 30.8 1 56.1m-37.2-40.2s1-2.7 2.3-1.6m-4.8-6.2s-5.6 5-2.5 8.1"
        fill="none"
        stroke="#ffdf00"
        strokeLinecap="round"
        strokeWidth="1.3"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M141 83s.5 4.3-.4 7.6 3.5 12.4 1.8 14.3m.5 8.8 11.8-.1"
        fill="none"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M138.6 118.5c0 .2 1.4 6.2 1 10.3m2.8-8.2c-.3 1.3-5.2 15.2-5 15.7m8-22c0 .3-.4 8.9-1.7 10.1m7.7-10.7s7.7 17.8 7.6 24.9 2.6 21.3.8 27.6m-6-27.8s-.6 13.2-6.1 18.4c-5.5 5.2 13.2 19.9 13.2 19.9"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M153.6 175.9s2 18.2 5.6 19.5m-22.6-50c.1.1-1.9 12.2-.3 14.2 1.6 2 14.9 20.5 14.3 39.6m-3.7-5.7s-.4 11.6-11.1 12.5m7.9-20s3.2 12-7.7 19.5"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1.3"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M147.9 156.9s12.3 12.8 12.8 18.4m-9.2-61.3s2.1 9 1.3 10.7"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M113.5 132.7s-1.3-2.3-1.1-4.9-.5-6.5 7.8-9.7c5-5 10.6-8.1 13.6-9.7 4.5-2.9 7.4-2.2 10-3.2 1.7-2 1.6-6.3 3.5-10.2 1.8-3.9 5-11.9 8.4-10.6 3.5 1.2.8 11.6-.5 15.2s-2.5 7.4-4.8 9.6c-2.3 2.3-12.8 6.3-14.8 7s-11.5 3-13.9 6.2c-2.4 3.3-2.2 8.2-8.2 10.3z"
        fill="#ffc6b5"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M112.8 125.8c.3-.1 4.2-1.3 6 2.1"
        fill="none"
        stroke="#000"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M142 55.2s-1.8 2.8-2.3 4.6c-.4 1.3-1.6-.1-2.2 2.7l1 .2c-.4.8-.5 2.2-.6 2.5-.1.3-.7 1.8-.6 3 0 .5 1.1 3 10.1-.8s-2.9-14.8-5.5-12.2z"
        fill="#ffc6b5"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="1.3"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M140.9 55.6c1-.5 7.5-1.1 6.4 11.7 1.2-.2 2-.4 2.7.9.8 1.2.7 2.7 2 2.7 1.4 0 1.5-.3 1.9-1.3.3-1 5.5 1.2 6.9-3.4-.3-1-3.2-2.3-3.6-4 .8-2.3-.3-9.8-9.9-10.2-4.9 0-5.9 2-6.4 3.6z"
        fill="#c59200"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M140.4 58.1c.1.1 3 1 3.3 2.3"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M531.7 244.1c0 .5-.4 1-.9 1s-.9-.5-.9-1 .4-1 1-1 .8.5.8 1z"
        fillRule="evenodd"
      />
      <path
        d="M154.4 61.5s-1 5.1 3.6 7.1m-7-6.4s1.7 0 1.7 1.6c0 1.7-1.4 1.9-1.3 3.1 0 1.3 2.4 1.8 2.5 2.8m-10.5-16.9s8.2 1 7.8 3c-.5 2-1.8 1.2-1.7 3s3.2.6 3.2.6.2-1.4 1.6-1.3.7 1.6 2.6 1.6"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="m138.4 65.5 2-.1"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1.3"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <path
        d="M143.4 73.7s.8 3.4-2 3"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1pt"
        transform="matrix(1.2096 0 0 1.2172 359.7 169.2)"
      />
      <g strokeWidth="1pt">
        <path
          d="M0 0v28.5l343.6 226H387V226L43.3 0H0zm386.9 0v28.5l-343.6 226H0V226L343.6 0H387z"
          fill="#fff"
        />
        <path
          d="M161.2 0v254.4h64.5V.1h-64.5zM0 85v84.7h386.9V84.8H0z"
          fill="#fff"
        />
        <path
          d="M0 101.8v50.9h386.9v-50.9H0zM174.1.1v254.3h38.7V.1h-38.7zM0 254.4l129-84.8h28.8l-129 84.8H0zM0 .1l129 84.8h-29L0 19V0zm229.1 84.8L358.1 0h28.8l-129 84.8h-28.8zm157.8 169.5-129-84.8h28.9l100.1 65.9v19z"
          fill="#c00"
        />
      </g>
    </FlagIconBase>
  ),
);
