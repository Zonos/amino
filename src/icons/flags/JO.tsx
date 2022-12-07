import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const JO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M-117.8 0h682.6v512h-682.6z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${ids[0]})`} transform="translate(110.5) scale(.9375)">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path d="M-117.8 0h1024v170.7h-1024z" />
          <path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z" />
          <path fill="#090" d="M-117.8 341.3h1024V512h-1024z" />
          <path fill="red" d="m-117.8 512 512-256-512-256v512z" />
          <path
            fill="#fff"
            d="m24.5 289 5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
