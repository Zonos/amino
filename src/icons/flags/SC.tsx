import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';
import { useStableUniqueId } from '../FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const SC = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath={`url(#${ids[0]})`}
        transform="scale(.9375)"
      >
        <path fill="red" d="M0 0h992.1v512H0z" />
        <path fill="#090" d="m0 512 992.1-170.7V512H0z" />
        <path fill="#fff" d="m0 512 992.1-341.3v170.6L0 512z" />
        <path fill="#009" d="M0 512V0h330.7L0 512z" />
        <path fill="#ff0" d="M0 512 330.7 0h330.7L0 512z" />
      </g>
    </FlagIconBase>
  );
});
