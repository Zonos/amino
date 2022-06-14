import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const SV = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
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
            d="M0 0v4h16V0H0Zm0 8v4h16V8H0Z"
            fill="#3D58DB"
          />
          <path
            d="M9.713 5.93a1.82 1.82 0 1 1-3.642 0 1.82 1.82 0 0 1 3.642 0Z"
            stroke="#E8AA00"
            strokeWidth=".5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.905 4.831s-.476.784-.476 1.322S7 7.367 7.896 7.367c.875 0 1.504-.522 1.523-1.214.019-.692-.47-1.184-.47-1.184s.276.996.138 1.4c-.139.403-.587.891-1.19.83-.604-.063-1.177-.806-1.177-1.046s.185-1.322.185-1.322Z"
            fill="#1E601B"
          />
          <path d="M7.08 6.164h1.604" stroke="#188396" strokeWidth=".5" />
          <path
            d="M7.23 5.903h1.38m-.085.303H7.297l.62-1.028.608 1.028Z"
            stroke="#E8AA00"
            strokeWidth=".5"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
