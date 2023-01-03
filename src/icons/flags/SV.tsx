import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const SV = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
              fill="#3D58DB"
              fillRule="evenodd"
              d="M0 0v4h16V0H0Zm0 8v4h16V8H0Z"
              clipRule="evenodd"
            />
            <path
              stroke="#E8AA00"
              strokeWidth=".5"
              d="M9.713 5.93a1.82 1.82 0 1 1-3.642 0 1.82 1.82 0 0 1 3.642 0Z"
            />
            <path
              fill="#1E601B"
              fillRule="evenodd"
              d="M6.905 4.831s-.476.784-.476 1.322S7 7.367 7.896 7.367c.875 0 1.504-.522 1.523-1.214.019-.692-.47-1.184-.47-1.184s.276.996.138 1.4c-.139.403-.587.891-1.19.83-.604-.063-1.177-.806-1.177-1.046s.185-1.322.185-1.322Z"
              clipRule="evenodd"
            />
            <path stroke="#188396" strokeWidth=".5" d="M7.08 6.164h1.604" />
            <path
              stroke="#E8AA00"
              strokeWidth=".5"
              d="M7.23 5.903h1.38m-.085.303H7.297l.62-1.028.608 1.028Z"
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
