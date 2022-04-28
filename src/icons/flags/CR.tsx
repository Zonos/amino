import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const CR = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#0000b4" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 75.4h640v322.3H0z" />
        <path fill="#d90000" d="M0 157.7h640v157.7H0z" />
      </g>
    </FlagIconBase>
  );
});
