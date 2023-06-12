import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const GW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <path d="M0 0h220v480H0z" fill="#ce1126" />
      <path d="M220 0h420v240H220z" fill="#fcd116" />
      <path d="M220 240h420v240H220z" fill="#009e49" />
      <g id={`${ids[0]}`} transform="matrix(80 0 0 80 110 240)">
        <path d="M0-1v1h.5" id={`${ids[1]}`} transform="rotate(18 0 -1)" />
        <use
          height="100%"
          transform="scale(-1 1)"
          width="100%"
          xlinkHref={`#${ids[1]}`}
        />
      </g>
      <use
        height="100%"
        transform="rotate(72 110 240)"
        width="100%"
        xlinkHref={`#${ids[0]}`}
      />
      <use
        height="100%"
        transform="rotate(144 110 240)"
        width="100%"
        xlinkHref={`#${ids[0]}`}
      />
      <use
        height="100%"
        transform="rotate(-144 110 240)"
        width="100%"
        xlinkHref={`#${ids[0]}`}
      />
      <use
        height="100%"
        transform="rotate(-72 110 240)"
        width="100%"
        xlinkHref={`#${ids[0]}`}
      />
    </FlagIconBase>
  );
});
