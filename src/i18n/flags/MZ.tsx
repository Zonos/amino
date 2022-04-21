import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const MZ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
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
          fill="#F7FCFF"
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
            d="M0 0v4h16V0H0z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8v4h16V8H0z"
            fill="#093"
          />
          <path d="M0 3.5h-.5v5h17v-5H0z" fill="#272727" stroke="#fff" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12l9-6-9-6z"
          fill="#F50100"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="9"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v12l9-6-9-6z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.034 7.177L2.145 8.702l.867-2.038-1.49-1.435H3.28L4.002 3.5l.766 1.73h1.754L4.955 6.663l.784 2.038-1.705-1.525z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.078 5.992l-.32 1.07s1.081-.01 1.211.099c.392-.244 1.198-.099 1.198-.099l-.429-1.145s-.543-.246-.769-.111c-.552-.125-.891.186-.891.186z"
            fill="#F7FCFF"
          />
          <path
            d="M5.782 7.608a.25.25 0 01-.4.3l-2.09-2.775a.25.25 0 01.4-.3l2.09 2.775z"
            fill="#000"
          />
          <path
            d="M3.487 4.92l-.2-.24"
            stroke="#000"
            strokeWidth=".5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.802 4.681l-.604.968.302.523.691-1.027.125-.318-.125-.146h-.389zM2.02 7.554l.464.54L5.998 4.02l-1.597.996L2.02 7.554z"
            fill="#000"
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
