import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const SD = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
        <path d="M0 341.3h1024V512H0z" />
        <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
        <path fill="red" d="M0 0h1024.8v170.7H0z" />
        <path fill="#009a00" d="M0 0v512l341.3-256L0 0z" />
      </g>
    </FlagIconBase>
  );
});
