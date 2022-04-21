import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const VC = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd">
        <path fill="#f4f100" d="M0 0h640v480H0z" />
        <path fill="#199a00" d="M490 0h150v480H490z" />
        <path fill="#0058aa" d="M0 0h150v480H0z" />
        <path
          fill="#199a00"
          d="M259.3 130l-46.4 71.3 44.7 74.4 43.8-73.7-42.1-72zm121.2 0l-46.3 71.3 44.7 74.4 43.8-73.7-42.2-72zm-61.2 97.3l-46.4 71.4 44.8 74.4 43.8-73.7-42.2-72z"
        />
      </g>
    </CountryIconBase>
  );
});
