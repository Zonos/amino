import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const CG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M-79.5 32h640v480h-640z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath={`url(#${ids[0]})`}
        transform="translate(79.5 -32)"
      >
        <path fill="#ff0" d="M-119.5 32h720v480h-720z" />
        <path fill="#00ca00" d="M-119.5 32v480l480-480h-480z" />
        <path fill="red" d="M120.5 512h480V32l-480 480z" />
      </g>
    </FlagIconBase>
  );
});
