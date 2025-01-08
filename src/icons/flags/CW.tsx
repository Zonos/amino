import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const CW = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const uniqueId = useId();
    return (
      <FlagIconBase
        ref={ref}
        borderRadius={borderRadius}
        height={height}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <clipPath id={`${uniqueId}-0`}>
            <path d="M0 0h682.7v512H0z" fillOpacity=".7" />
          </clipPath>
          <path
            d="m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z"
            id={`${uniqueId}-1`}
          />
        </defs>
        <g clipPath={`url(#${uniqueId}-0)`} transform="scale(.94)">
          <path d="M0 0h768v512H0z" fill="#002b7f" />
          <path d="M0 320h768v64H0z" fill="#f9e814" />
          <use
            fill="#fff"
            height="9000"
            transform="scale(42.67)"
            width="13500"
            x="2"
            xlinkHref={`#${uniqueId}-1`}
            y="2"
          />
          <use
            fill="#fff"
            height="9000"
            transform="scale(56.9)"
            width="13500"
            x="3"
            xlinkHref={`#${uniqueId}-1`}
            y="3"
          />
        </g>
      </FlagIconBase>
    );
  },
);
