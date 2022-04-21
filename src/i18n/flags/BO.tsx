import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const BO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          fill="#FECA00"
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
            fill="#DB501C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8v4h16V8H0z"
            fill="#5EAA22"
          />
          <path
            d="M5.824 5.63S5.638 7.534 7.33 7.534h1.261s1.781-.116 1.574-1.904"
            stroke="#DB501C"
            strokeWidth=".75"
          />
          <path
            d="M9.125 5.9a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
            fill="#FECA00"
            stroke="#68B9E8"
            strokeWidth=".75"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 6a.5.5 0 100-1 .5.5 0 000 1z"
            fill="#DB501C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.05 6.8c.47 0 .85-.18.85-.4 0-.22-.38-.4-.85-.4s-.85.18-.85.4c0 .22.38.4.85.4z"
            fill="#5EAA22"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.05 5c.663 0 1.2-.18 1.2-.4 0-.221-.537-.4-1.2-.4-.663 0-1.2.179-1.2.4 0 .22.537.4 1.2.4z"
            fill="#674F28"
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
