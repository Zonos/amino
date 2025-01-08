import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const NU = forwardRef<SVGSVGElement, Props>(
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
            <path d="M0 0h496v372H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${uniqueId}-0)`} transform="scale(1.2902)">
          <path d="M0 0h499.6v248.1H0z" fill="#fff" fillRule="evenodd" />
          <path d="M0 0v18.6L119.2 80l44.9 1.3L0 0z" fill="#c00" />
          <path d="m51 0 144.6 75.5V0H51z" fill="#006" />
          <path
            d="M214.9 0v96.4H0v55h215v96.4h66v-96.4h215v-55H281V0h-66z"
            fill="#c00"
          />
          <path d="M300.2 0v71.1L441.6.6 300.2 0z" fill="#006" />
          <path d="m304.7 78.9 39.8-.3L498.9.6l-41 .6L304.8 79z" fill="#c00" />
          <path d="M0 167.5v52.8L99.2 168 0 167.6z" fill="#006" />
          <path
            d="m381.9 169.7-41.4-.3 155.8 77.5-1-17.7-113.5-59.5zM38.7 248.3l146.1-76.8-38.3.3L0 248.1"
            fill="#c00"
          />
          <path
            d="m497.9 21.8-118 58.5 116.4.5v87.1h-99.1l98.2 53.3 1.4 27-52.4-.6-143.6-70.5v71.2H196V177L61.3 248l-60.9.2V496H992V.4L499 0M.6 28 0 79.4l104.4 1.3L.5 28z"
            fill="#006"
          />
          <g fill="#ffd900" fillRule="evenodd" strokeWidth="1pt">
            <path d="M496 0h496.1v496h-496z" />
            <path d="M0 248h523.5v248H0z" />
          </g>
          <g fillRule="evenodd">
            <path
              d="M290.9 125.3a42.8 42.8 0 1 1-85.5 0 42.8 42.8 0 0 1 85.5 0z"
              fill="#000067"
            />
            <path
              d="m240.2 114.3 8.2-24.6 8.2 24.6h26.7l-21.6 15.2L270 154l-21.6-15.3-21.6 15.2 8.3-24.5-21.6-15.2zm148.5 4 4.1-11.5 4 11.6h13.3l-10.7 7 4.1 11.5-10.7-7-10.7 7 4.1-11.5-10.7-7zM244.1 204l4-11.5 4.1 11.5h13.2l-10.7 7 4.1 11.6-10.7-7.1-10.7 7 4.1-11.4-10.7-7.1zm0-167 4-11.6 4.1 11.5h13.2L254.7 44l4.1 11.5-10.7-7-10.7 7 4.1-11.5-10.7-7zM98.9 118.2l4.1-11.5 4 11.5h13.3l-10.7 7.1 4.1 11.5-10.7-7-10.7 7 4.1-11.5-10.7-7z"
              fill="#fff40d"
            />
          </g>
        </g>
      </FlagIconBase>
    );
  },
);
