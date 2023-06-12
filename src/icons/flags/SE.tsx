import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const SE = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path d="M-53.4 0h682.6v512H-53.4z" fillOpacity=".7" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${ids[0]})`} transform="translate(50) scale(.9375)">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path
            d="M-121.1.3h256v204.8h-256zm0 306.9h256V512h-256z"
            fill="#006aa7"
          />
          <path d="M-121.1 205h256v102.4h-256z" fill="#fecc00" />
          <path d="M133.8 0h102.4v512H133.8z" fill="#fecc00" />
          <path d="M233 205h460.8v102.4H233z" fill="#fecc00" />
          <path
            d="M236.2 307.2H697V512H236.2zm0-306.9H697v204.8H236.2z"
            fill="#006aa7"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
