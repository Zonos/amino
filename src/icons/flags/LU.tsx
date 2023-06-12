import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const LU = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <path d="M0 240h640v240H0z" fill="#00a1de" />
    <path d="M0 0h640v240H0z" fill="#ed2939" />
    <path d="M0 160h640v160H0z" fill="#fff" />
  </FlagIconBase>
));
