import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const PS = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M-118 0h682.7v512H-118z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${ids[0]})`} transform="translate(110.6) scale(.9375)">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path d="M-246 0H778v170.7H-246z" />
          <path fill="#fff" d="M-246 170.7H778v170.6H-246z" />
          <path fill="#090" d="M-246 341.3H778V512H-246z" />
          <path fill="red" d="m-246 512 512-256L-246 0v512z" />
        </g>
      </g>
    </FlagIconBase>
  );
});
