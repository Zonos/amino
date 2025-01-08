import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const UY = forwardRef<SVGSVGElement, Props>(
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
        <path d="M0 0h640v480H0z" fill="#fff" />
        <path
          d="M266 53.3h374v53.4H266zm0 106.7h374v53.3H266zM0 266.7h640V320H0zm0 106.6h640v53.4H0z"
          fill="#0038a8"
        />
        <g
          fill="#fcd116"
          stroke="#000"
          strokeMiterlimit="20"
          strokeWidth=".6"
          transform="translate(133.3 133.3) scale(2.93333)"
        >
          <g id={`${uniqueId}-0`}>
            <g id={`${uniqueId}-1`}>
              <g id={`${uniqueId}-2`}>
                <path
                  d="m-2.058 8.889 3.01 4.494c-12.367 8.949-4.817 14.24-13.58 17.105 5.45-5.32-.859-5.767 3.733-16.854"
                  strokeLinecap="square"
                />
                <path
                  d="M-4.21 10.163c-6.822 11.245-2.348 17.428-8.419 20.325"
                  fill="none"
                />
                <path d="M0 0h6L0 33-6 0h6v33" />
              </g>
              <use
                height="100%"
                transform="rotate(45)"
                width="100%"
                xlinkHref={`#${uniqueId}-2`}
              />
            </g>
            <use
              height="100%"
              transform="rotate(90)"
              width="100%"
              xlinkHref={`#${uniqueId}-1`}
            />
          </g>
          <use
            height="100%"
            transform="scale(-1)"
            width="100%"
            xlinkHref={`#${uniqueId}-0`}
          />
          <circle r="11" />
        </g>
        <g transform="translate(133.3 133.3) scale(.29333)">
          <g id={`${uniqueId}-3`}>
            <path d="M81-44c-7 8-11-6-36-6S16-35 12-38s21-21 29-22 31 7 40 16m-29 9c7 6 1 19-6 19S26-28 32-36" />
            <path d="M19-26c1-12 11-14 27-14s23 12 29 15c-7 0-13-10-29-10s-16 0-27 10m3 2c4-6 9 6 20 6s17-3 24-8-10 12-21 12-26-6-23-10" />
            <path d="M56-17c13-7 5-17 0-19 2 2 10 12 0 19M0 43c6 0 8-2 16-2s27 11 38 7c-23 9-14 3-54 3h-5m63 6c-4-7-3-5-11-16 8 6 10 9 11 16M0 67c25 0 21-5 54-19-24 3-29 11-54 11h-5m5-29c7 0 9-5 17-5s19 3 24 7c1 1-3-8-11-9S25 9 16 7c0 4 3 3 4 9 0 5-9 5-11 0 2 8-4 8-9 8" />
          </g>
          <use
            height="100%"
            transform="scale(-1 1)"
            width="100%"
            xlinkHref={`#${uniqueId}-3`}
          />
          <path d="M0 76c-5 0-18 3 0 3s5-3 0-3" />
        </g>
      </FlagIconBase>
    );
  },
);
