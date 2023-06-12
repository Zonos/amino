import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BJ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path d="M67.6-154h666v666h-666z" fill="gray" />
        </clipPath>
      </defs>
      <g
        clipPath={`url(#${ids[0]})`}
        transform="matrix(.961 0 0 .7207 -65 111)"
      >
        <g fillRule="evenodd" strokeWidth="1pt">
          <path d="M0-154h333v666H0z" fill="#319400" />
          <path d="M333-154h666v333H333z" fill="#ffd600" />
          <path d="M333 179h666v333H333z" fill="#de2110" />
        </g>
      </g>
    </FlagIconBase>
  );
});
