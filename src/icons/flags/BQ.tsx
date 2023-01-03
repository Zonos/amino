import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const BQ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <path fill="#21468b" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 0h640v320H0z" />
    <path fill="#ae1c28" d="M0 0h640v160H0z" />
  </FlagIconBase>
));
