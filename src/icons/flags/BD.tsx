import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const BD = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <path d="M0 0h640v480H0z" fill="#006a4e" />
    <circle cx="280" cy="240" fill="#f42a41" r="160" />
  </FlagIconBase>
));
