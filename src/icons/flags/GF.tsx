import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const GF = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <path d="M0 0h640v480z" fill="#078930" />
    <path d="m0 0 640 480H0z" fill="#fcdd09" />
    <path d="M252.4 218h135.2l-109.4 79.5L320 169l41.8 128.6z" fill="#da121a" />
  </FlagIconBase>
));
