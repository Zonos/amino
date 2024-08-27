import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const EU = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(5);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <defs>
        <g id={`${ids[0]}`}>
          <g id={`${ids[1]}`}>
            <path d="m0-1-.3 1 .5.1z" id={`${ids[2]}`} />
            <use transform="scale(-1 1)" xlinkHref={`#${ids[2]}`} />
          </g>
          <g id={`${ids[3]}`}>
            <use transform="rotate(72)" xlinkHref={`#${ids[1]}`} />
            <use transform="rotate(144)" xlinkHref={`#${ids[1]}`} />
          </g>
          <use transform="scale(-1 1)" xlinkHref={`#${ids[3]}`} />
        </g>
      </defs>
      <path d="M0 0h640v480H0z" fill="#039" />
      <g fill="#fc0" transform="translate(320 242.3) scale(23.7037)">
        <use height="100%" width="100%" xlinkHref={`#${ids[0]}`} y="-6" />
        <use height="100%" width="100%" xlinkHref={`#${ids[0]}`} y="6" />
        <g id={`${ids[4]}`}>
          <use height="100%" width="100%" x="-6" xlinkHref={`#${ids[0]}`} />
          <use
            height="100%"
            transform="rotate(-144 -2.3 -2.1)"
            width="100%"
            xlinkHref={`#${ids[0]}`}
          />
          <use
            height="100%"
            transform="rotate(144 -2.1 -2.3)"
            width="100%"
            xlinkHref={`#${ids[0]}`}
          />
          <use
            height="100%"
            transform="rotate(72 -4.7 -2)"
            width="100%"
            xlinkHref={`#${ids[0]}`}
          />
          <use
            height="100%"
            transform="rotate(72 -5 .5)"
            width="100%"
            xlinkHref={`#${ids[0]}`}
          />
        </g>
        <use
          height="100%"
          transform="scale(-1 1)"
          width="100%"
          xlinkHref={`#${ids[4]}`}
        />
      </g>
    </FlagIconBase>
  );
});
