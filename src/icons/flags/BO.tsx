import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[2]})`}>
        <mask
          id={`${ids[0]}`}
          width="16"
          height="12"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h16v12H0z" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M0 0v12h16V0H0Z"
            clipRule="evenodd"
          />
          <mask
            id={`${ids[1]}`}
            width="16"
            height="12"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0v12h16V0H0Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              fill="#DB501C"
              fillRule="evenodd"
              d="M0 0v4h16V0H0Z"
              clipRule="evenodd"
            />
            <path
              fill="#5EAA22"
              fillRule="evenodd"
              d="M0 8v4h16V8H0Z"
              clipRule="evenodd"
            />
            <path
              stroke="#DB501C"
              strokeWidth=".75"
              d="M5.824 5.63S5.638 7.534 7.33 7.534h1.261s1.781-.116 1.574-1.904"
            />
            <path
              fill="#FECA00"
              stroke="#68B9E8"
              strokeWidth=".75"
              d="M9.125 5.9a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z"
            />
            <path
              fill="#DB501C"
              fillRule="evenodd"
              d="M8 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
              clipRule="evenodd"
            />
            <path
              fill="#5EAA22"
              fillRule="evenodd"
              d="M8.05 6.8c.47 0 .85-.18.85-.4 0-.22-.38-.4-.85-.4s-.85.18-.85.4c0 .22.38.4.85.4Z"
              clipRule="evenodd"
            />
            <path
              fill="#674F28"
              fillRule="evenodd"
              d="M8.05 5c.663 0 1.2-.18 1.2-.4 0-.221-.537-.4-1.2-.4-.663 0-1.2.179-1.2.4 0 .22.537.4 1.2.4Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[2]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
