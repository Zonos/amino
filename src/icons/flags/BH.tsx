import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BH = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M0 0h640v480H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" strokeWidth="1pt" clipPath={`url(#${ids[0]})`}>
        <path fill="#e10011" d="M-32.5 0h720v480h-720z" />
        <path
          fill="#fff"
          d="m114.3 479.8-146.8.2V0h146l94.3 30.4-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5"
        />
      </g>
    </FlagIconBase>
  );
});
