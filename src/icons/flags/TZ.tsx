import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const TZ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path d="M10 0h160v120H10z" fillOpacity=".7" />
        </clipPath>
      </defs>
      <g
        clipPath={`url(#${ids[0]})`}
        fillRule="evenodd"
        strokeWidth="1pt"
        transform="matrix(4 0 0 4 -40 0)"
      >
        <path d="M0 0h180v120H0z" fill="#09f" />
        <path d="M0 0h180L0 120V0z" fill="#090" />
        <path d="M0 120h40l140-95V0h-40L0 95v25z" />
        <path
          d="M0 91.5 137.2 0h13.5L0 100.5v-9zM29.3 120 180 19.5v9L42.8 120H29.3z"
          fill="#ff0"
        />
      </g>
    </FlagIconBase>
  );
});
