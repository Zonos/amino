import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const VE = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(6);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <g id={`${ids[0]}`} transform="translate(0 -36)">
          <g id={`${ids[1]}`}>
            <g id={`${ids[2]}`}>
              <path id={`${ids[3]}`} fill="#fff" d="M0-5-1.5-.2l2.8.9z" />
              <use
                xlinkHref={`#${ids[3]}`}
                width="180"
                height="120"
                transform="scale(-1 1)"
              />
            </g>
            <use
              xlinkHref={`#${ids[2]}`}
              width="180"
              height="120"
              transform="rotate(72)"
            />
          </g>
          <use
            xlinkHref={`#${ids[2]}`}
            width="180"
            height="120"
            transform="rotate(-72)"
          />
          <use
            xlinkHref={`#${ids[1]}`}
            width="180"
            height="120"
            transform="rotate(144)"
          />
        </g>
      </defs>
      <path fill="#cf142b" d="M0 0h640v480H0z" />
      <path fill="#00247d" d="M0 0h640v320H0z" />
      <path fill="#fc0" d="M0 0h640v160H0z" />
      <g id={`${ids[4]}`} transform="matrix(4 0 0 4 320 336)">
        <g id={`${ids[5]}`}>
          <use
            xlinkHref={`#${ids[0]}`}
            width="180"
            height="120"
            transform="rotate(10)"
          />
          <use
            xlinkHref={`#${ids[0]}`}
            width="180"
            height="120"
            transform="rotate(30)"
          />
        </g>
        <use
          xlinkHref={`#${ids[5]}`}
          width="180"
          height="120"
          transform="rotate(40)"
        />
      </g>
      <use
        xlinkHref={`#${ids[4]}`}
        width="180"
        height="120"
        transform="rotate(-80 320 336)"
      />
    </FlagIconBase>
  );
});
