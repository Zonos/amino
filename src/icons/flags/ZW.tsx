import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const ZW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[3]})`}>
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
            fill="#F7FCFF"
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
              fill="#FECA00"
              fillRule="evenodd"
              d="M0 1v10h16V1H0Z"
              clipRule="evenodd"
            />
            <path
              fill="#272727"
              stroke="#E31D1C"
              strokeWidth="1.75"
              d="M0 4.125h-.875v3.75h17.75v-3.75H0Z"
            />
            <path
              fill="#5EAA22"
              fillRule="evenodd"
              d="M0 2V0h16v2H0Zm0 10v-2h16v2H0Z"
              clipRule="evenodd"
            />
          </g>
          <path
            fill="#F7FCFF"
            stroke="#272727"
            d="M.298-.401-.5-.995V12.98l.794-.575L8.459 6.48l.551-.4-.546-.406L.298-.401Z"
          />
          <mask
            id={`${ids[2]}`}
            width="11"
            height="16"
            x="-1"
            y="-2"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              stroke="#fff"
              d="M.298-.401-.5-.995V12.98l.794-.575L8.459 6.48l.551-.4-.546-.406L.298-.401Z"
            />
          </mask>
          <g fillRule="evenodd" clipRule="evenodd" mask={`url(#${ids[2]})`}>
            <path
              fill="#E31D1C"
              d="M3.74 7.139 1.85 8.664l.866-2.038-1.489-1.434h1.758l.721-1.73.766 1.73h1.755L4.66 6.626l.785 2.038L3.739 7.14Z"
            />
            <path
              fill="#FECA00"
              d="M2.509 4.21s-.028-.066.134-.124c.162-.058.212-.182.339-.091.126.091.206-.092.242.17.037.264.137.678.137.678L5.005 6.08h-.309s-.48.706-.402 1.326c0 0-.331-.05-.781-.05s-.744.107-.744.107l-.26-.961s.094-.162.134-.292c.04-.13.208-.155.208-.258 0-.104-.165-.19-.082-.459.082-.268.082-1.07.082-1.07s-.26-.115-.208-.115c.053 0 .174-.096.087-.096h-.22Z"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[3]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
