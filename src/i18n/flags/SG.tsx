import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const SG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M0 0h640v480H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath={`url(#${ids[0]})`}>
        <path fill="#fff" d="M-20 0h720v480H-20z" />
        <path fill="#df0000" d="M-20 0h720v240H-20z" />
        <path
          fill="#fff"
          d="M146 40.2a84.4 84.4 0 00.8 165.2 86 86 0 01-106.6-59 86 86 0 0159-106c16-4.6 30.8-4.7 46.9-.2z"
        />
        <path
          fill="#fff"
          d="M133 110l4.9 15-13-9.2-12.8 9.4 4.7-15.2-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.5 52l5 15.1-13-9.2-12.9 9.3 4.8-15.1-12.8-9.4 15.9-.1 4.9-15.1 5 15h16zm58.5-.4l4.9 15.2-13-9.3-12.8 9.3 4.7-15.1-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.4-51.6l4.9 15.1-13-9.2-12.8 9.3 4.8-15.1-12.9-9.4 16-.1 4.8-15.1 5 15h16zm-46.3-34.3l5 15.2-13-9.3-12.9 9.4 4.8-15.2-12.8-9.4 15.8-.1 5-15.1 5 15h16z"
        />
      </g>
    </CountryIconBase>
  );
});
