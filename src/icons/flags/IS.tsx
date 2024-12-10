import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const IS = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <FlagIconBase
        borderRadius={borderRadius}
        height={height}
        ref={ref}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <clipPath id={`${ids[0]}`}>
            <path d="M0 0h640v480H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${ids[0]})`} fillRule="evenodd" strokeWidth="0">
          <path d="M0 0h666.7v480H0z" fill="#003897" />
          <path
            d="M0 186.7h186.7V0h106.6v186.7h373.4v106.6H293.3V480H186.7V293.3H0V186.7z"
            fill="#fff"
          />
          <path
            d="M0 213.3h213.3V0h53.4v213.3h400v53.4h-400V480h-53.4V266.7H0v-53.4z"
            fill="#d72828"
          />
        </g>
      </FlagIconBase>
    );
  },
);
