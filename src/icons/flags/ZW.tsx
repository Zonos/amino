import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const ZW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[3]})`}>
        <mask
          height="12"
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          width="16"
          x="0"
          y="0"
        >
          <path d="M0 0h16v12H0z" fill="#fff" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            clipRule="evenodd"
            d="M0 0v12h16V0H0Z"
            fill="#F7FCFF"
            fillRule="evenodd"
          />
          <mask
            height="12"
            id={`${ids[1]}`}
            maskUnits="userSpaceOnUse"
            width="16"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d="M0 0v12h16V0H0Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              clipRule="evenodd"
              d="M0 1v10h16V1H0Z"
              fill="#FECA00"
              fillRule="evenodd"
            />
            <path
              d="M0 4.125h-.875v3.75h17.75v-3.75H0Z"
              fill="#272727"
              stroke="#E31D1C"
              strokeWidth="1.75"
            />
            <path
              clipRule="evenodd"
              d="M0 2V0h16v2H0Zm0 10v-2h16v2H0Z"
              fill="#5EAA22"
              fillRule="evenodd"
            />
          </g>
          <path
            d="M.298-.401-.5-.995V12.98l.794-.575L8.459 6.48l.551-.4-.546-.406L.298-.401Z"
            fill="#F7FCFF"
            stroke="#272727"
          />
          <mask
            height="16"
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            width="11"
            x="-1"
            y="-2"
          >
            <path
              d="M.298-.401-.5-.995V12.98l.794-.575L8.459 6.48l.551-.4-.546-.406L.298-.401Z"
              fill="#fff"
              stroke="#fff"
            />
          </mask>
          <g clipRule="evenodd" fillRule="evenodd" mask={`url(#${ids[2]})`}>
            <path
              d="M3.74 7.139 1.85 8.664l.866-2.038-1.489-1.434h1.758l.721-1.73.766 1.73h1.755L4.66 6.626l.785 2.038L3.739 7.14Z"
              fill="#E31D1C"
            />
            <path
              d="M2.509 4.21s-.028-.066.134-.124c.162-.058.212-.182.339-.091.126.091.206-.092.242.17.037.264.137.678.137.678L5.005 6.08h-.309s-.48.706-.402 1.326c0 0-.331-.05-.781-.05s-.744.107-.744.107l-.26-.961s.094-.162.134-.292c.04-.13.208-.155.208-.258 0-.104-.165-.19-.082-.459.082-.268.082-1.07.082-1.07s-.26-.115-.208-.115c.053 0 .174-.096.087-.096h-.22Z"
              fill="#FECA00"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[3]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
