import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <defs>
        <path
          d="m0-.5.2.5h-.4z"
          fill="#fff"
          id={`${ids[0]}`}
          transform="scale(8.844)"
        />
        <g id={`${ids[1]}`}>
          <use
            height="12"
            transform="rotate(-144)"
            width="18"
            xlinkHref={`#${ids[0]}`}
          />
          <use
            height="12"
            transform="rotate(-72)"
            width="18"
            xlinkHref={`#${ids[0]}`}
          />
          <use height="12" width="18" xlinkHref={`#${ids[0]}`} />
          <use
            height="12"
            transform="rotate(72)"
            width="18"
            xlinkHref={`#${ids[0]}`}
          />
          <use
            height="12"
            transform="rotate(144)"
            width="18"
            xlinkHref={`#${ids[0]}`}
          />
        </g>
      </defs>
      <path d="M0-.1h640V160H0z" fill="#fecb00" />
      <path d="M0 320h640v160H0z" fill="#ea2839" />
      <path d="M0 160h640v160H0z" fill="#34b233" />
      <use
        height="12"
        transform="matrix(40 0 0 40 -40 0)"
        width="18"
        x="9"
        xlinkHref={`#${ids[1]}`}
        y="6.4"
      />
    </FlagIconBase>
  );
});
