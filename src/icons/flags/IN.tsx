import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const IN = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(4);
    return (
      <FlagIconBase
        borderRadius={borderRadius}
        height={height}
        ref={ref}
        viewBox="0 0 640 480"
        width={width}
      >
        <path d="M0 0h640v160H0z" fill="#f93" />
        <path d="M0 160h640v160H0z" fill="#fff" />
        <path d="M0 320h640v160H0z" fill="#128807" />
        <g transform="matrix(3.2 0 0 3.2 320 240)">
          <circle fill="#008" r="20" />
          <circle fill="#fff" r="17.5" />
          <circle fill="#008" r="3.5" />
          <g id={`${ids[0]}`}>
            <g id={`${ids[1]}`}>
              <g id={`${ids[2]}`}>
                <g fill="#008" id={`${ids[3]}`}>
                  <circle r=".9" transform="rotate(7.5 -8.8 133.5)" />
                  <path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z" />
                </g>
                <use
                  height="100%"
                  transform="rotate(15)"
                  width="100%"
                  xlinkHref={`#${ids[3]}`}
                />
              </g>
              <use
                height="100%"
                transform="rotate(30)"
                width="100%"
                xlinkHref={`#${ids[2]}`}
              />
            </g>
            <use
              height="100%"
              transform="rotate(60)"
              width="100%"
              xlinkHref={`#${ids[1]}`}
            />
          </g>
          <use
            height="100%"
            transform="rotate(120)"
            width="100%"
            xlinkHref={`#${ids[0]}`}
          />
          <use
            height="100%"
            transform="rotate(-120)"
            width="100%"
            xlinkHref={`#${ids[0]}`}
          />
        </g>
      </FlagIconBase>
    );
  },
);
