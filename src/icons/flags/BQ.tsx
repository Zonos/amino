import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const BQ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <path d="M0 0h640v480H0z" fill="#21468b" />
    <path d="M0 0h640v320H0z" fill="#fff" />
    <path d="M0 0h640v160H0z" fill="#ae1c28" />
  </FlagIconBase>
));
