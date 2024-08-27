import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const BJ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 24 24" width={width}>
    <path
      d="M21.333 3.333h-12V12H24V6a2.667 2.667 0 0 0-2.667-2.667Z"
      fill="#FCD116"
    />
    <path
      d="M9.333 20.667h12A2.667 2.667 0 0 0 24 18v-6H9.333v8.667Z"
      fill="#E8112D"
    />
    <path
      d="M9.333 3.333H2.667A2.667 2.667 0 0 0 0 6v12a2.667 2.667 0 0 0 2.667 2.667h6.666V3.333Z"
      fill="#008751"
    />
  </FlagIconBase>
));
