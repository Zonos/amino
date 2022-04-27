import React, { forwardRef } from 'react';

import { FlagIconBase } from './FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const CH = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#d52b1e" d="M0 0h640v480H0z" />
        <g fill="#fff">
          <path d="M170 195h300v90H170z" />
          <path d="M275 90h90v300h-90z" />
        </g>
      </g>
    </FlagIconBase>
  );
});
