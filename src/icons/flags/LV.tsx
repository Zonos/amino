import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const LV = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <g fillRule="evenodd">
      <path d="M0 0h640v480H0z" fill="#fff" />
      <path d="M0 0h640v192H0zm0 288h640v192H0z" fill="#981e32" />
    </g>
  </FlagIconBase>
));
