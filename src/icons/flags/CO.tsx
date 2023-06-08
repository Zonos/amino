import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const CO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path d="M0 0h640v480H0z" fill="#ffe800" />
      <path d="M0 240h640v240H0z" fill="#00148e" />
      <path d="M0 360h640v120H0z" fill="#da0010" />
    </g>
  </FlagIconBase>
));
