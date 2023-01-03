import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const GL = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path
      fill="#d00c33"
      d="M0 240h640v240H0zm80 0a160 160 0 1 0 320 0 160 160 0 0 0-320 0"
    />
  </FlagIconBase>
));
