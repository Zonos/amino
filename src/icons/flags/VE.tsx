import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const VE = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(6);
    return (
      <FlagIconBase
        borderRadius={borderRadius}
        height={height}
        ref={ref}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <g id={`${ids[0]}`} transform="translate(0 -36)">
            <g id={`${ids[1]}`}>
              <g id={`${ids[2]}`}>
                <path d="M0-5-1.5-.2l2.8.9z" fill="#fff" id={`${ids[3]}`} />
                <use
                  height="120"
                  transform="scale(-1 1)"
                  width="180"
                  xlinkHref={`#${ids[3]}`}
                />
              </g>
              <use
                height="120"
                transform="rotate(72)"
                width="180"
                xlinkHref={`#${ids[2]}`}
              />
            </g>
            <use
              height="120"
              transform="rotate(-72)"
              width="180"
              xlinkHref={`#${ids[2]}`}
            />
            <use
              height="120"
              transform="rotate(144)"
              width="180"
              xlinkHref={`#${ids[1]}`}
            />
          </g>
        </defs>
        <path d="M0 0h640v480H0z" fill="#cf142b" />
        <path d="M0 0h640v320H0z" fill="#00247d" />
        <path d="M0 0h640v160H0z" fill="#fc0" />
        <g id={`${ids[4]}`} transform="matrix(4 0 0 4 320 336)">
          <g id={`${ids[5]}`}>
            <use
              height="120"
              transform="rotate(10)"
              width="180"
              xlinkHref={`#${ids[0]}`}
            />
            <use
              height="120"
              transform="rotate(30)"
              width="180"
              xlinkHref={`#${ids[0]}`}
            />
          </g>
          <use
            height="120"
            transform="rotate(40)"
            width="180"
            xlinkHref={`#${ids[5]}`}
          />
        </g>
        <use
          height="120"
          transform="rotate(-80 320 336)"
          width="180"
          xlinkHref={`#${ids[4]}`}
        />
      </FlagIconBase>
    );
  },
);
