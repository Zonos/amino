import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const TD = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <g fillRule="evenodd">
      <path d="M0 0h214v480H0z" fill="#000067" />
      <path d="M426 0h214v480H426z" fill="red" />
      <path d="M214 0h212v480H214z" fill="#ff0" />
    </g>
  </FlagIconBase>
));
