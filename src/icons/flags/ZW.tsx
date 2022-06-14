import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const ZW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
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
          d="M0 0v12h16V0H0Z"
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
            d="M0 0v12h16V0H0Z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1v10h16V1H0Z"
            fill="#FECA00"
          />
          <path
            d="M0 4.125h-.875v3.75h17.75v-3.75H0Z"
            fill="#272727"
            stroke="#E31D1C"
            strokeWidth="1.75"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2V0h16v2H0Zm0 10v-2h16v2H0Z"
            fill="#5EAA22"
          />
        </g>
        <path
          d="M.298-.401-.5-.995V12.98l.794-.575L8.459 6.48l.551-.4-.546-.406L.298-.401Z"
          fill="#F7FCFF"
          stroke="#272727"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="-2"
          width="11"
          height="16"
        >
          <path
            d="M.298-.401-.5-.995V12.98l.794-.575L8.459 6.48l.551-.4-.546-.406L.298-.401Z"
            fill="#fff"
            stroke="#fff"
          />
        </mask>
        <g mask={`url(#${ids[2]})`} fillRule="evenodd" clipRule="evenodd">
          <path
            d="M3.74 7.139 1.85 8.664l.866-2.038-1.489-1.434h1.758l.721-1.73.766 1.73h1.755L4.66 6.626l.785 2.038L3.739 7.14Z"
            fill="#E31D1C"
          />
          <path
            d="M2.509 4.21s-.028-.066.134-.124c.162-.058.212-.182.338-.091.127.091.207-.092.243.17.037.264.137.678.137.678L5.005 6.08h-.31s-.48.706-.4 1.326c0 0-.332-.05-.782-.05s-.745.107-.745.107l-.26-.961s.095-.162.135-.292c.04-.13.208-.155.208-.258 0-.104-.165-.19-.083-.459.083-.268.083-1.07.083-1.07s-.26-.115-.208-.115c.053 0 .174-.096.087-.096h-.22Z"
            fill="#FECA00"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
