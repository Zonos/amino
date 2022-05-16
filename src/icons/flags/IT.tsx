import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const IT = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#009246" d="M0 0h213.3v480H0z" />
        <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
      </g>
    </FlagIconBase>
  );
});
