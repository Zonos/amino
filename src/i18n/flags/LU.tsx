import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const LU = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <path fill="#00a1de" d="M0 240h640v240H0z" />
      <path fill="#ed2939" d="M0 0h640v240H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
    </CountryIconBase>
  );
});
