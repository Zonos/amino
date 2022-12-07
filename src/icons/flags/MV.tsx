import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const MV = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <path fill="#d21034" d="M0 0h640v480H0z" />
    <path fill="#007e3a" d="M120 120h400v240H120z" />
    <circle cx="350" cy="240" r="80" fill="#fff" />
    <circle cx="380" cy="240" r="80" fill="#007e3a" />
  </FlagIconBase>
));
