import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
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
      <g mask={`url(#${ids[0]})`} fillRule="evenodd" clipRule="evenodd">
        <path d="M0 8h16v4H0V8z" fill="#E31D1C" />
        <path d="M0 4h16v4H0V4z" fill="#5EAA22" />
        <path d="M0 0h16v4H0V0z" fill="#FFD018" />
        <path
          d="M8.031 7.988L5.456 9.625l.863-2.866-1.837-1.873 2.533-.055L8.135 2l1.022 2.867 2.526.044-1.899 1.907.887 2.727-2.64-1.558z"
          fill="#F7FCFF"
        />
      </g>
    </CountryIconBase>
  );
});
