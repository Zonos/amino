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
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#ce1126" d="M0 0h220v480H0z" />
      <path fill="#fcd116" d="M220 0h420v240H220z" />
      <path fill="#009e49" d="M220 240h420v240H220z" />
      <g id={`${ids[0]}`} transform="matrix(80 0 0 80 110 240)">
        <path id={`${ids[1]}`} d="M0-1v1h.5" transform="rotate(18 0 -1)" />
        <use
          xlinkHref={`#${ids[1]}`}
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlinkHref={`#${ids[0]}`}
        width="100%"
        height="100%"
        transform="rotate(72 110 240)"
      />
      <use
        xlinkHref={`#${ids[0]}`}
        width="100%"
        height="100%"
        transform="rotate(144 110 240)"
      />
      <use
        xlinkHref={`#${ids[0]}`}
        width="100%"
        height="100%"
        transform="rotate(-144 110 240)"
      />
      <use
        xlinkHref={`#${ids[0]}`}
        width="100%"
        height="100%"
        transform="rotate(-72 110 240)"
      />
    </FlagIconBase>
  );
});
