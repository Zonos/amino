import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BZ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 16 12"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12h16V0H0z"
          fill="#0168B4"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v12h16V0H0z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v2h16V0H0zM0 10v2h16v-2H0z"
            fill="#E93C43"
          />
          <path d="M8 9a3 3 0 110-6 3 3 0 010 6z" fill="#F7FCFF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 6a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM11 6a3 3 0 11-6 0 3 3 0 016 0z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 6a3 3 0 106 0 3 3 0 00-6 0zm5.3 0a2.3 2.3 0 11-4.6 0 2.3 2.3 0 014.6 0z"
            fill="#5B8C39"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 7l1.47-.188L9.5 7v.5l-1.53-.188L6.5 7.5V7z"
            fill="#5B8C39"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 5h2s.141 3-1 3-1-3-1-3z"
            fill="#769DF1"
          />
          <path fill="#FECA00" d="M8 5h1v1H8z" />
          <path opacity=".6" fill="#F6F7F8" d="M7 5h1v1H7z" />
          <rect
            opacity=".66"
            x="7"
            y="4"
            width="2"
            height="1"
            rx=".5"
            fill="#5B8C39"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.9 6.4c.276 0 .5-.448.5-1s-.224-1-.5-1-.5.448-.5 1 .224 1 .5 1z"
            fill="#E9AD35"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.1 6.4c.276 0 .5-.448.5-1s-.224-1-.5-1-.5.448-.5 1 .224 1 .5 1z"
            fill="#5C2216"
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
