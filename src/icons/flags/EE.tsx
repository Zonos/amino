import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const EE = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <rect height="477.9" rx="0" ry="0" width="640" />
      <rect fill="#fff" height="159.3" rx="0" ry="0" width="640" y="320.7" />
      <path d="M0 0h640v159.3H0z" fill="#1291ff" />
    </g>
  </FlagIconBase>
));
