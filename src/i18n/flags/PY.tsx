import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const PY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
            d="M6 6a2 2 0 104 0 2 2 0 00-4 0zm3.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v4h16V0H0z"
            fill="#F05234"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8v4h16V8H0z"
            fill="#3D58DB"
          />
          <path
            d="M7.289 4.928l.285.411c-.285.197-.37.47-.262.875.107.398.343.584.76.599l-.018.5c-.636-.023-1.061-.359-1.225-.97-.16-.6-.006-1.092.46-1.415z"
            fill="#73BE4A"
          />
          <path
            d="M8.712 4.928l-.284.411c.284.197.37.47.261.875-.106.398-.342.584-.76.599l.018.5c.636-.023 1.061-.359 1.225-.97.161-.6.007-1.092-.46-1.415z"
            fill="#73BE4A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.001 6.374a.5.5 0 100-1 .5.5 0 000 1z"
            fill="#FBCD17"
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
