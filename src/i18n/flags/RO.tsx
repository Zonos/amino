import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const RO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#00319c" d="M0 0h213.3v480H0z" />
        <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#de2110" d="M426.7 0H640v480H426.7z" />
      </g>
    </CountryIconBase>
  );
});
