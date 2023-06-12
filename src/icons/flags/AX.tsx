import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const AX = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path d="M106.3 0h1133.3v850H106.3z" fillOpacity=".7" />
        </clipPath>
      </defs>
      <g
        clipPath={`url(#${ids[0]})`}
        transform="matrix(.56472 0 0 .56482 -60 -.1)"
      >
        <path d="M0 0h1300v850H0z" fill="#0053a5" />
        <g fill="#ffce00">
          <path d="M400 0h250v850H400z" />
          <path d="M0 300h1300v250H0z" />
        </g>
        <g fill="#d21034">
          <path d="M475 0h100v850H475z" />
          <path d="M0 375h1300v100H0z" />
        </g>
      </g>
    </FlagIconBase>
  );
});
