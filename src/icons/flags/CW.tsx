import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const CW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
        <path
          id={`${ids[1]}`}
          d="m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z"
        />
      </defs>
      <g clipPath={`url(#${ids[0]})`} transform="scale(.94)">
        <path fill="#002b7f" d="M0 0h768v512H0z" />
        <path fill="#f9e814" d="M0 320h768v64H0z" />
        <use
          xlinkHref="#b"
          width="13500"
          height="9000"
          x="2"
          y="2"
          fill="#fff"
          transform="scale(42.67)"
        />
        <use
          xlinkHref="#b"
          width="13500"
          height="9000"
          x="3"
          y="3"
          fill="#fff"
          transform="scale(56.9)"
        />
      </g>
    </FlagIconBase>
  );
});
