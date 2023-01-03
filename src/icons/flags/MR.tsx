import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const MR = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <path fill="#cd2a3e" d="M0 0h640v480H0z" />
    <path fill="#006233" d="M0 72h640v336H0z" />
    <path
      fill="#ffc400"
      d="M470 154.6a150 150 0 0 1-300 0 154.9 154.9 0 0 0-5 39.2 155 155 0 1 0 310 0 154.4 154.4 0 0 0-5-39.2z"
      className="st1"
    />
    <path
      fill="#ffc400"
      d="m320 93.8-13.5 41.5H263l35.3 25.6-13.5 41.4 35.3-25.6 35.3 25.6-13.5-41.4 35.3-25.6h-43.6z"
    />
  </FlagIconBase>
));
