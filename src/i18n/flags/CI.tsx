import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const CI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd">
        <path fill="#00cd00" d="M426.8 0H640v480H426.8z" />
        <path fill="#ff9a00" d="M0 0h212.9v480H0z" />
        <path fill="#fff" d="M212.9 0h214v480h-214z" />
      </g>
    </CountryIconBase>
  );
});
