import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const CM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <path d="M0 0h213.3v480H0z" fill="#007a5e" />
      <path d="M213.3 0h213.4v480H213.3z" fill="#ce1126" />
      <path d="M426.7 0H640v480H426.7z" fill="#fcd116" />
      <g fill="#fcd116" transform="translate(320 240) scale(7.1111)">
        <g id={`${ids[0]}`}>
          <path d="M0-8-2.5-.4 1.3.9z" id={`${ids[1]}`} />
          <use
            height="100%"
            transform="scale(-1 1)"
            width="100%"
            xlinkHref={`#${ids[1]}`}
          />
        </g>
        <use
          height="100%"
          transform="rotate(72)"
          width="100%"
          xlinkHref={`#${ids[0]}`}
        />
        <use
          height="100%"
          transform="rotate(144)"
          width="100%"
          xlinkHref={`#${ids[0]}`}
        />
        <use
          height="100%"
          transform="rotate(-144)"
          width="100%"
          xlinkHref={`#${ids[0]}`}
        />
        <use
          height="100%"
          transform="rotate(-72)"
          width="100%"
          xlinkHref={`#${ids[0]}`}
        />
      </g>
    </FlagIconBase>
  );
});
