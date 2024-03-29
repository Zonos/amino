import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const AM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <path d="M0 0h640v160H0z" fill="red" />
    <path d="M0 160h640v160H0z" fill="#00f" />
    <path d="M0 320h640v160H0z" fill="orange" />
  </FlagIconBase>
));
