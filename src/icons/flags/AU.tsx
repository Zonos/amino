import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const AU = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <g strokeWidth="1pt">
        <path d="M0 0h640v480H0z" fill="#006" />
        <path
          d="M0 0v28l307 222h38.7v-28L38.7 0H0zm345.7 0v28l-307 222H0v-28L307 0h38.7z"
          fill="#fff"
        />
        <path
          d="M144 0v250h57.6V0H144zM0 83.3v83.4h345.7V83.3H0z"
          fill="#fff"
        />
        <path
          d="M0 100v50h345.7v-50H0zM155.6 0v250H190V0h-34.5zM0 250l115.2-83.3H141L25.8 250H0zM0 0l115.2 83.3H89.5L0 18.6V0zm204.7 83.3L319.9 0h25.8L230.5 83.3h-25.8zm141 166.7-115.2-83.3h25.7l89.5 64.7V250z"
          fill="#c00"
        />
        <path
          d="m299.8 392.5-43.7 3.8 6 43.4L232 408l-30.1 31.7 6-43.4-43.7-3.8 37.7-22.3-24.3-36.5 41 15.5 13.4-41.7 13.5 41.7 41-15.5-24.3 36.5m224.4 62.3L476 416.7l17.8 6.7 5.8-18.1 5.8 18.1 17.8-6.7-10.5 15.8 16.4 9.7-19 1.7 2.6 18.9-13-13.9-13.2 13.9 2.6-18.9-19-1.6m16.4-291.9L476 134.6l17.8 6.7 5.8-18.1 5.8 18.1 17.8-6.7-10.5 15.8 16.4 9.8-19 1.6 2.6 18.9-13-13.8-13.2 13.7 2.6-18.8-19-1.6M380.8 265l-10.5-15.8 17.8 6.7 5.8-18.1 5.9 18.1 17.8-6.7L407 265l16.4 9.7-19 1.7 2.7 18.9-13.2-13.9-13 13.9 2.5-18.9-19-1.6m216.3-38L570 221l17.8 6.7 5.8-18.1 5.9 18.1 17.8-6.7-10.5 15.8 16.3 9.7-19 1.7 2.6 18.8-13-13.8-13.2 13.8 2.6-18.8-19-1.7M542 320l-10.3 6.5 2.9-11.9-9.3-7.8 12.1-1 4.6-11.2 4.7 11.3 12.1.9-9.3 7.8 2.9 11.9"
          fill="#fff"
          fillRule="evenodd"
        />
      </g>
    </FlagIconBase>
  ),
);
