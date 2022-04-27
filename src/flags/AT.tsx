import React, { forwardRef } from 'react';

import { FlagIconBase } from './FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const AT = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd">
        <path fill="#fff" d="M640 480H0V0h640z" />
        <path fill="#df0000" d="M640 480H0V320h640zm0-319.9H0V.1h640z" />
      </g>
    </FlagIconBase>
  );
});
