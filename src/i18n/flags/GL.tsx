import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const GL = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path
        fill="#d00c33"
        d="M0 240h640v240H0zm80 0a160 160 0 10320 0 160 160 0 00-320 0"
      />
    </CountryIconBase>
  );
});
