import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const BH = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <FlagIconBase
        ref={ref}
        borderRadius={borderRadius}
        height={height}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <clipPath id={`${ids[0]}`}>
            <path d="M0 0h640v480H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${ids[0]})`} fillRule="evenodd" strokeWidth="1pt">
          <path d="M-32.5 0h720v480h-720z" fill="#e10011" />
          <path
            d="m114.3 479.8-146.8.2V0h146l94.3 30.4-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5"
            fill="#fff"
          />
        </g>
      </FlagIconBase>
    );
  },
);
