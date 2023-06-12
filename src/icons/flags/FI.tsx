import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const FI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <path d="M0 0h640v480H0z" fill="#fff" />
    <path d="M0 174.5h640v131H0z" fill="#003580" />
    <path d="M175.5 0h130.9v480h-131z" fill="#003580" />
  </FlagIconBase>
));
