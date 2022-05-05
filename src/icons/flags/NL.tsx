import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const NL = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd" strokeWidth="1pt" transform="scale(1.25 .9375)">
        <rect width="512" height="509.8" fill="#fff" rx="0" ry="0" />
        <rect
          width="512"
          height="169.9"
          y="342.1"
          fill="#21468b"
          rx="0"
          ry="0"
        />
        <path fill="#ae1c28" d="M0 0h512v170H0z" />
      </g>
    </FlagIconBase>
  );
});
