import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const TO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#c10000" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 0h250v200.3H0z" />
      <g fill="#c10000">
        <path d="M102.8 31.2h39.9v139.6h-39.8z" />
        <path d="M192.6 81v40H53V81z" />
      </g>
    </g>
  </FlagIconBase>
));
