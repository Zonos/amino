import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const BW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd">
        <path fill="#00cbff" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path d="M0 186h640v108H0z" />
      </g>
    </FlagIconBase>
  );
});
