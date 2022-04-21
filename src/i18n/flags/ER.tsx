import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const ER = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 16 12"
    >
      <g clipPath={`url(#${ids[1]})`}>
        <mask
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="17"
          height="12"
        >
          <path fill="#fff" d="M0 0h17v12H0z" />
        </mask>
        <g mask={`url(#${ids[0]})`} fillRule="evenodd" clipRule="evenodd">
          <path d="M0 0v6h16V0H0z" fill="#43B764" />
          <path d="M0 6v6h16V6H0z" fill="#B4D7F4" />
          <path d="M0 0l16.5 6L0 12V0z" fill="#BE0027" />
          <path
            d="M4.557 8.684l-.478.01a4.762 4.762 0 01-.095-.128 3.157 3.157 0 01-.355-1.458v.13c-.002.58-.002.827.355 1.328.102.198.225.392.37.58l.616-.472-.413.01z"
            fill="#F3E294"
          />
          <path
            d="M1 6.25a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm5.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            fill="#F3E294"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[1]}`}>
          <path
            d="M0 1a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V1z"
            fill="#fff"
          />
        </clipPath>
      </defs>
    </CountryIconBase>
  );
});
