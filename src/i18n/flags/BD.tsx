import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const BD = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <path fill="#006a4e" d="M0 0h640v480H0z" />
      <circle cx="280" cy="240" r="160" fill="#f42a41" />
    </CountryIconBase>
  );
});
