import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const TD = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd">
        <path fill="#000067" d="M0 0h214v480H0z" />
        <path fill="red" d="M426 0h214v480H426z" />
        <path fill="#ff0" d="M214 0h212v480H214z" />
      </g>
    </CountryIconBase>
  );
});
