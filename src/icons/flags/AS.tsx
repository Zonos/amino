import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const AS = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <FlagIconBase
        borderRadius={borderRadius}
        height={height}
        ref={ref}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <clipPath id={`${ids[0]}`}>
            <path d="M0 0h640v480H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${ids[0]})`}>
          <path d="M-374-16H650v512H-374z" fill="#006" />
          <path
            d="M-374 240 650 496V-16L-374 240z"
            fill="#bd1021"
            fillRule="evenodd"
          />
          <path
            d="M650 11.4v457.2L-264.3 240 650 11.4z"
            fill="#fff"
            fillRule="evenodd"
          />
          <g stroke="#000">
            <path
              d="M478 297.4s-6.4-5.2 1.2-13.7c-4.1-3.4-.3-10.1-.3-10.1s-7-2.6.3-13.4c-5.3-3.5-3-11.3-3-11.3s-17-6.4-.8-12.5c-13.4 5.8-25.9-7.9-25.9-7.9l-19.4.6c-3.3-16.2-29-2.1-10-48.5-4.9-.9-10.4-2.3-16 1.7-5.4 4.1-21.1 12.8-30.4 4.1s6-21.2 6.4-21.5c.3-.3 20.6-10.8 23.5-17.7-.3-5.3-6.7-9.3-.9-20.7 6.7-10.7 47.7-20.9 66.3-24.4a29.5 29.5 0 0 0 13-11.9l2.1 7.6s41.3-12.2 43.3-18 .9 5.2.9 5.2c16.2-1.5 36.9-15.4 39.8-9 13.6-2.6 39.8-14.3 39.8-14.3s9-.3 2.6 9.6c4 6.4-1.2 12-1.5 12-.2 0 1.8 6.3-3.4 9.8 1.7 5.5-3.2 10-3.2 10s2.3 6.6-7 10c.9 5.9-5.2 7-5.2 7s.8 6.1-3.2 8.8c0 4.6-4.7 7-4.7 7s3 1.7-1.2 4.6a1568 1568 0 0 1-46.2 28.5c0-.3 30.8 5.5 32.9 6.6s25.3 16.6 25.3 16.6l-23.6 29s-26.1-2.8-27.3-1.4 5.5 2 7 4.4c1.4 2.3 3.8 7.8 8.4 7.2 4.7-.5-8.7 8.5-17.4 9.3 0 3.2 11 3.5 14 1 2.8-2.7-7 7.5-8.2 9s13-2.1 13-2.1-2.3 9.6-14.7 12.5c4.9 8.1 2.9 13.3 2.6 13.3s-8.2-8-15.7-6.6c2 7.8 8.1 15 9.9 16.2 1.7 1.2-13.7 1-15.7-3.5s-3.8 10.5 1.7 15.2c-6.4.3-11.9-3.5-11.9-3.5s-3.8 8.7-1.2 13c2.6 4.4-9-8.7-9-8.7l-22 9.3-5-8.4z"
              fill="#9c3900"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d="M307.3 280.1c.5 0 32.1-.5 46.6-8.8a86.3 86.3 0 0 0 17 19.1l4.7-16.5s11.4.5 12.4 3c-1.5 3.2-2 7.3-2 7.3s7.7.6 8.3 1.6c.5 1-2.1 9.8-2.1 9.8l33.1 7.8s2.6-13 5.2-11.4c2.6 1.6 14 17.6 30 18.6s17-13.4 17-13.4l3.7 2s6.7-14.4 7.8-14.4 2.5 2 11.3 2c2.6 3.1 3.7 10.4 3.7 10.4s-9.9 9.8-6.8 17.6 3.7 5.7 3.7 5.7l71.4 17s3.6 5.7-2.6 8.8c0 .5-72-16.5-72-16.5s-6.7 7.7-11.9 6.2-1.5 3-1.5 3l77.6 6.3s5.7 7.2 1.6 9.3c-5.2.5-83.9-5.2-83.9-5.2s-4.6 9.9-9.8 1.6c-3.6 5.7-7.8-1.6-7.8-1.6s-6.7 5.2-7.7-.5c-5.7 4.2-9.3-2.6-9.3-2.6l-33.2-2-2 3s5.7 1.6-3.1 5.2c-8.8 3.7 52.8 2.1 54.3 2.6 1.6.6-4.1 5.2-4.1 5.2s31.5 2 37.2-4.6c5.7-6.8-2 8.8-2 8.8s24.8-1 24.8-2.1-.5 7.7-17.6 6.7a112 112 0 0 0 23.3 10.9s-13 3-28-.5c2.6 6.7 14 12.9 14 12.9s-8.3 7.2-26.9-10.4c5.2 9.4 1 13 .5 12a48 48 0 0 0-30-18.7c13 8.3 7.3 12 7.3 12s-6.8-12-17.6 0c-4.2-11-20.2-17.2-39.9-18.2-6.2-7.2-9.8-5.2-24.3-9.3-8.3-9.3-20.2-19.7-20.2-19.7s.5-14 14.5-12.4c1.6 4.7 1.6 3.1 1.6 3.1s15.5-5.7 20.1 2c6.8-11.8 16-1.7 17.6 2.4 4.5.7 27 1.3 27 1.3s-2.7-4.7-1-4.1c1.5.5 13.9-4.7 13.4-6.2-.6-1.6-1-6.8 1-6.3 2 .6-17.6-2.5-28.5 5.7-3.6-3.6-1-13.4-1-13.4l-32-6.7-1.6 8.2s-9.4 1.6-8.8-.5l-2.1 7.3s-12.4-3.1-12.4-3.7 3.6-18.6 3.6-18c0 .4-10.4 1-24.8 11.8-4.2-13-36.8-30-36.8-30.5z"
              fill="#ffc221"
              fillRule="evenodd"
              strokeWidth="1.9"
            />
            <path
              d="m386 284.8-6.7 30m12.9-18.7-2 9.9m35.1-2-3 9.2m60.4 53.8c-.5 0-16.5 2.1-18.6 1.6-2-.5 25.4 8.3 25.4 11.9m-35.7-9.8s-16-10.4-18.7-9.4c-2.5 1 16-.5 17.6-2m-32-.5s-16.6.5-18.2-1 16 11.3 19.2 10.3m-33.1-16.6c-.5 0-11.4-4.1-16-5.2 4 4.2 7.2 9.9 17.5 12m2.6-13.5c-.5-1-20.7-7.3-20.7-10.4a32.6 32.6 0 0 0 17.6 2.1M499.8 321l-2 9.3"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M347.7 237.7s-21.7 18.6 0 29.5c1-7.3 2.6-8.3 2.6-8.3s18 6.7 29-9.3c-4.7-6.8-13-4.2-13-4.2s-17 0-18.6-7.7z"
              fill="#ffc221"
              fillRule="evenodd"
              strokeWidth="1.9"
            />
            <path
              d="m365.8 246-15 12.9m61.2 76.9s3.5 3.8.4 8.5m72.4-4.7-5.7.5m-40.9-3.6 10.4 1.6m17.5-28.2s.3 10.5-8.4 10.2c-8.8-.3-5.9.3-5.9.3"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M472.8 308.1s3.5 1.2 2.6 3.8c-.9 2.6.9 10.2-9.3 17.5-10.8 2.3-9.6-9-9.6-9"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M476.6 311.4s6.3-3.8 7.2 2.3c.9 6-5.2 17.4-9.6 19.2-4.3 1.7-9.3-.3-8.7-3.2m18.9-15.7s5.8-4.7 7.6 1.4c1.7 6.1-4.7 19.8-7.3 20m7.8-20s3-1.4 5 .3m-14.3 20.6c-1.1.3-6 .6-7.8-3.2m-18.3-7-6.1.4m28.4 22.6-.5-9.6-2.4-3.2-4 4.1s-.6 9.6-2.4 10.5m2.4-10.8-3.2-6-5 6s-.5 8.7-2.3 9.6m2.3-9.9-2-5.8s-5.8 3.2-6.4 5.5c-.6 2.4-.9 8.7-2.3 9.3m2.3-10.4s.6-5.3-1.2-5.3c-1.7 0-9.5 7.3-9.8 13.7"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M348.4 237.8s2.9-2.9 3.8-6.4c.8-3.4-1.2-7.2 2.3-10.4s49.4-22.7 53.2-26.5a115 115 0 0 0 11.6-13.6c.9-1.8 3.5 8.7-4.4 13.3 8.5-2.3 14-4.9 17.5-3.7-3.5 4.9-12.8 13-17.2 13 10.2-3.7 19.5-7 22.1-4.9 2.6 2-12.5 12.2-18.6 12.8 10.2-2.6 23.8-6.7 25.6-2.3-5.5 1.7-3.8 3.2-15.1 9.6a28.5 28.5 0 0 1-8.7 1.4c8.7-.9 20.6-4.4 21.8 2-7 2.7-9.6 6.1-15.4 7.6-5.9 1.4-19.2 4-27.4 7.3-8 3.2-20 12.5-20 12.5s-25.9.8-25.9.5c0-.3-5-11.9-5.2-12.2z"
              fill="#fff"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeWidth="1.9"
            />
            <path
              d="M360.6 235.8s.3-5.8 3-7.8c2.5-2 15.6-7 18.5-11.4 3-4.3-4.3 7.6-3.2 10.8m-13-.3s6.3 2.3 4.9 7.2"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M373.4 230.4a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0z"
              fill="none"
              strokeWidth="1.6"
            />
            <path
              d="m570.1 220.1 50.3 9.6s5.5-6.4 2.6-9.9c7.6-1.7 5.5-11.6 5.5-11.6s8.7-3.8 1.5-12.5c5-5-1.2-8.7-1.2-8.7s2-8.7-4.3-9.6c1.7-7-11-9.3-11-9.3s-26.5 7.3-45.1 7.8c6 6.1-2.3 10-2.3 10s4.9 3.4 3.4 6.3c-1.4 3 1 6.1-5.5 8.2 8.4 3.7-.9 10.1-.9 10.1s9.3 6.4 7 9.6z"
              fill="#fff"
              fillRule="evenodd"
              strokeWidth="1.9"
            />
            <path
              d="M565.2 209.4s44.4 5.2 46.5 5.2 9.8 2.6 11.3 5.2m-55.5-13 61.9 1.4m-61.6-3s58.7-3.4 62.8-9.5m-61-3.2s59-6.4 59.5-5.5m-61.6-1.8s57.2-9 57.8-7.5m-221.1-29.4s18 19.8 16.3 33.2"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M419.3 171s5.8 8.4 8.1 9.3 22.7 2 23.9 10.8c1.1 5.5-4.4 3.7-3.5 7.8 1.4 5.2 15 12 30 4M464 207s12.2 18 30.2-1.4m-9.3 7.8s14.8 7.9 27-12.5m-15.7 14.3s7.3 6 22.4-2m20.9-8.2s22.4 4.6 23.8 6M548 200l15.7.6m-25.3-9.3s26.8-1.7 30.3 3.8M526.8 183s37.5 1.5 39.2 3.5m-30.8 34.9s6.4-1.8 7.3-1M520.7 237s8.4 7.2 19.2 4m-14.5 8.2s9.6 4.3 20.9 1.7m-17.7 5.5s9.6 6.4 16 5.3m-20.4-1.5s6.7 5 7 7.6m-16.3-1.8s2 10.5 9.3 14.3m-14.2-9.6s-3.2 13.6 4.9 22m-13.4-11.3c0 .3-.5 6.4-.2 7m-52-59.9 15.6-.8s5.8-2.4 1.8-6.1m2 3.5c.3 0 14.8 1.1 18.6 5.5 3.8 4.3 8.4 13 11 14.5 2.7 1.5 3.2-.6 3.2-.6m-6.4-2.3s-7.8 13.4-1.7 17.4m-2.6-2.6s-7 9.3-1.5 14m-1.4-1.2s-5.5 9 1.1 15.1m-3.6-39c-.3.4-6.7 4.9-9 3.8m2.3 10.4s2.6 2.7 4.9 2.3m-4.6 11.4 4.2 2.8m-3.6 7.6 3.6 2.2m-69.3-144.7s7.7 4 13.8 0c6.1-4 35.4-19 43-21.4 7.7-2.4 12-16.5 13.5-22.6m-5.8 16.5 42.8-12.5s7-5.8 7.3-16.5m-3 11.6s42.7-4.3 42.7-20.2m-6.7 11s45-12.2 49.2-16.8"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M436.2 151.5s27.2-14 31.5-15.6c4.3-1.5 14-13.8-.6-13.8"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M449.4 157c.3 0 22.3-14.4 29.6-16.2 4-5.5 1.8-11.3-4.9-10.1"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M480.9 137.1c.6-.3 11.9-.6 7.9 8.3-5.8 4.2-30.9 16.8-30.9 16.8m17.1-34.5 47.7-16s4-8.2-1.8-9.4m39.7-14.4c0 .3 6.1 3.7 2.4 9.2-6.7 4-38.4 11.6-38.4 11.6M608.9 83l-45 12.6m41.6-2.5-39 12m35.7-2.2-34.6 10.4m28.1-.6c-.9 0-25.6 7.6-25.6 7.6m20.2 0-16 6.4m12 2.2a321 321 0 0 0-13.8 5.8m9.8 1.2-12.2 5.8m-8.9 7.3s1.5.6 1.2 2.5m-32 14.3s5.1 1.9.3 6.8c-2.5 3.3-9.5 2.4-13.8 8.5m46.8-83.7s6.4 1.5 1.5 9.8c-12.8 4.9-38.8 12.8-38.8 12.8s-1.2 2.2-4.6 4a758.6 758.6 0 0 1-40.3 12.2m84.3-29.3s7 3 0 8.2c-8 4.6-35.7 13.2-35.7 13.2s-.4 2.4-1.6 3.3c-1.2 1-37.9 13.2-37.9 13.2"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M567.6 115.1s7.4 2.2 1 8.3a289 289 0 0 1-32.1 12.8s-2.5 3-6.5 4.3a919 919 0 0 0-29.3 11.6m68.8-28.7c2.1.9 8 1.8.9 7.3-8.3 3.7-28.4 11.6-28.4 11.6l-1.9 3.4-32 13.7m63.2-27.8s3 3.7-3.7 8c-7.3 4-23.2 10-23.2 10m23.2-9.4s3.4 2.1-.9 5.2c-4.9 2.4-24.1 12.5-24.1 12.5l-12.5 8.3"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M523.6 112c0 .4 5.2 4.6 3.4 9.5 4.6 3.4 3.7 7 3.7 7s6.4 3.7 5.5 9c6.4 1.5 6 5.1 6 5.1l-2 3.4s6.3-.3.8 8c3.4 1.8 1.9 3.9 1.9 3.9m-1.9-3.7c-.9 0-22.3 8-27.8 12.9"
              fill="none"
              strokeWidth="1.9"
            />
            <path
              d="M489.4 144.8s6.4-.3 5.5 6.7c7.4-2.5 5.8 4.6 5.8 4.6s8.6-3.4 7 7.3c5.6-1.2 4.6 4.3 4.6 4.3s5-.3 5 2.4c3.3-3 7-1.5 7-1.5s2.4-3.4 5.8-2.4m-34.9-15c0 .6-28.7 16.5-28.7 16.5m34.2-11.3L479 169.8m29-6.7c0 .3-18.9 11.3-18.9 11.3m23.2-7s-13.4 11-16.5 10.4m21.1-7s-7.6 5.7-14 8.5m22-11s2.4 3-12.9 11"
              fill="none"
              strokeWidth="1.9"
            />
          </g>
        </g>
      </FlagIconBase>
    );
  },
);
