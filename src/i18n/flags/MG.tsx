import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const MG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#ff3319" d="M213.3 0H640v240H213.3z" />
        <path fill="#00cc28" d="M213.3 240H640v240H213.3z" />
        <path fill="#fff" d="M0 0h213.3v480H0z" />
      </g>
    </CountryIconBase>
  );
});
