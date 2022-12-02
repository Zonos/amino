import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const LC = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <g fillRule="evenodd">
      <path fill="#65cfff" d="M0 0h640v480H0z" />
      <path fill="#fff" d="m318.9 42 162.7 395.3-322.6.9L318.9 42z" />
      <path d="m319 96.5 140.8 340-279 .8L319 96.5z" />
      <path fill="#ffce00" d="m318.9 240.1 162.7 197.6-322.6.5 159.9-198.1z" />
    </g>
  </FlagIconBase>
));
