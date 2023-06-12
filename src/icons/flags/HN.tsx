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
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <path d="M0 0h640v480H0z" fill="#0073cf" />
      <path d="M0 160h640v160H0z" fill="#fff" />
      <g
        fill="#0073cf"
        id={`${ids[0]}`}
        transform="translate(320 240) scale(26.66665)"
      >
        <g id={`${ids[1]}`}>
          <path d="m-.3 0 .5.1L0-1z" id={`${ids[2]}`} />
          <use
            height="100%"
            transform="scale(-1 1)"
            width="100%"
            xlinkHref={`#${ids[2]}`}
          />
        </g>
        <use
          height="100%"
          transform="rotate(72)"
          width="100%"
          xlinkHref={`#${ids[1]}`}
        />
        <use
          height="100%"
          transform="rotate(-72)"
          width="100%"
          xlinkHref={`#${ids[1]}`}
        />
        <use
          height="100%"
          transform="rotate(144)"
          width="100%"
          xlinkHref={`#${ids[1]}`}
        />
        <use
          height="100%"
          transform="rotate(-144)"
          width="100%"
          xlinkHref={`#${ids[1]}`}
        />
      </g>
      <use
        height="100%"
        transform="translate(133.3 -42.7)"
        width="100%"
        xlinkHref={`#${ids[0]}`}
      />
      <use
        height="100%"
        transform="translate(133.3 37.3)"
        width="100%"
        xlinkHref={`#${ids[0]}`}
      />
      <use
        height="100%"
        transform="translate(-133.3 -42.7)"
        width="100%"
        xlinkHref={`#${ids[0]}`}
      />
      <use
        height="100%"
        transform="translate(-133.3 37.3)"
        width="100%"
        xlinkHref={`#${ids[0]}`}
      />
    </FlagIconBase>
  );
});
