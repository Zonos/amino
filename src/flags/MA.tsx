import React, { forwardRef } from 'react';

import { FlagIconBase } from './FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const MA = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#c1272d" d="M640 0H0v480h640z" />
      <path
        fill="none"
        stroke="#006233"
        strokeWidth="11.7"
        d="M320 179.4L284.4 289l93.2-67.6H262.4l93.2 67.6z"
      />
    </FlagIconBase>
  );
});
