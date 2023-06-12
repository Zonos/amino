import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const SL = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <g fillRule="evenodd">
      <path d="M0 320.3h640V480H0z" fill="#0000cd" />
      <path d="M0 160.7h640v159.6H0z" fill="#fff" />
      <path d="M0 0h640v160.7H0z" fill="#00cd00" />
    </g>
  </FlagIconBase>
));
