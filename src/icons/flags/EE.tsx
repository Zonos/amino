import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const EE = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd" strokeWidth="1pt">
        <rect width="640" height="477.9" rx="0" ry="0" />
        <rect width="640" height="159.3" y="320.7" fill="#fff" rx="0" ry="0" />
        <path fill="#1291ff" d="M0 0h640v159.3H0z" />
      </g>
    </FlagIconBase>
  );
});
