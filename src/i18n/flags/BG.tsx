import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const BG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#d62612" d="M0 320h640v160H0z" />
        <path fill="#fff" d="M0 0h640v160H0z" />
        <path fill="#00966e" d="M0 160h640v160H0z" />
      </g>
    </CountryIconBase>
  );
});
