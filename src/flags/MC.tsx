import React, { forwardRef } from 'react';

import { FlagIconBase } from './FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const MC = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#f31830" d="M0 0h640v240H0z" />
        <path fill="#fff" d="M0 240h640v240H0z" />
      </g>
    </FlagIconBase>
  );
});
