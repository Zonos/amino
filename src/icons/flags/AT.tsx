import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const AT = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <g fillRule="evenodd">
      <path d="M640 480H0V0h640z" fill="#fff" />
      <path d="M640 480H0V320h640zm0-319.9H0V.1h640z" fill="#df0000" />
    </g>
  </FlagIconBase>
));
