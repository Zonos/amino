import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const TH = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd">
        <path fill="#f4f5f8" d="M0 0h640v480H0z" />
        <path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
        <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
      </g>
    </FlagIconBase>
  );
});
