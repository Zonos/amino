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
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#007a5e" d="M0 0h213.3v480H0z" />
      <path fill="#ce1126" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#fcd116" d="M426.7 0H640v480H426.7z" />
      <g fill="#fcd116" transform="translate(320 240) scale(7.1111)">
        <g id={`${ids[0]}`}>
          <path id={`${ids[1]}`} d="M0-8-2.5-.4 1.3.9z" />
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
          transform="rotate(144)"
        />
        <use
          xlinkHref="#b"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
        <use
          xlinkHref="#b"
          width="100%"
          height="100%"
          transform="rotate(-72)"
        />
      </g>
    </FlagIconBase>
  );
});
