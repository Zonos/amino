import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const CO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#ffe800" d="M0 0h640v480H0z" />
        <path fill="#00148e" d="M0 240h640v240H0z" />
        <path fill="#da0010" d="M0 360h640v120H0z" />
      </g>
    </FlagIconBase>
  );
});
