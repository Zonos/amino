import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const GA = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd">
        <path fill="#ffe700" d="M640 480H0V0h640z" />
        <path fill="#36a100" d="M640 160H0V0h640z" />
        <path fill="#006dbc" d="M640 480H0V320h640z" />
      </g>
    </FlagIconBase>
  );
});
