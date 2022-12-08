import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const HN = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#0073cf" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <g
        id={`${ids[0]}`}
        fill="#0073cf"
        transform="translate(320 240) scale(26.66665)"
      >
        <g id={`${ids[1]}`}>
          <path id={`${ids[2]}`} d="m-.3 0 .5.1L0-1z" />
          <use
            xlinkHref="#a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          />
        </g>
        <use xlinkHref="#b" width="100%" height="100%" transform="rotate(72)" />
        <use
          xlinkHref="#b"
          width="100%"
          height="100%"
          transform="rotate(-72)"
        />
        <use
          xlinkHref="#b"
          width="100%"
          height="100%"
          transform="rotate(144)"
        />
        <use
          xlinkHref="#b"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
      </g>
      <use
        xlinkHref="#c"
        width="100%"
        height="100%"
        transform="translate(133.3 -42.7)"
      />
      <use
        xlinkHref="#c"
        width="100%"
        height="100%"
        transform="translate(133.3 37.3)"
      />
      <use
        xlinkHref="#c"
        width="100%"
        height="100%"
        transform="translate(-133.3 -42.7)"
      />
      <use
        xlinkHref="#c"
        width="100%"
        height="100%"
        transform="translate(-133.3 37.3)"
      />
    </FlagIconBase>
  );
});
