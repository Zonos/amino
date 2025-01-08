import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const TV = forwardRef<SVGSVGElement, Props>(
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
            <path d="M0 0h640v480H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${uniqueId}-0)`}>
          <g
            fill="#009fca"
            fillRule="evenodd"
            strokeWidth="1pt"
            transform="matrix(.64508 0 0 .92059 0 23.3)"
          >
            <path d="M506-19.8h486V496H506z" />
            <rect height="521.4" ry="0" width="523.5" y="-25.3" />
          </g>
          <path d="M0 0h396v196.6H0z" fill="#fff" fillRule="evenodd" />
          <path d="M0 0v14.8l94.5 48.5 35.5 1L0 0z" fill="#c00" />
          <path d="M40.5 0 155 59.8V0H40.5z" fill="#006" />
          <path
            d="M170.3 0v76.4H0V120h170.3v76.4h52.3V120H393V76.4H222.7V0h-52.4z"
            fill="#c00"
          />
          <path d="M238 0v56.4l112-56L238 0z" fill="#006" />
          <path
            d="m241.5 62.5 31.5-.2L395.4.4l-32.5.6-121.4 61.5z"
            fill="#c00"
          />
          <path d="M0 132.7v41.9l78.6-41.4-78.6-.5z" fill="#006" />
          <path
            d="m302.6 134.5-32.8-.3 123.5 61.5-.8-14-90-47.2zM30.7 196.7 146.5 136l-30.4.2L0 196.6"
            fill="#c00"
          />
          <path
            d="M394.6 17.3 301 63.6l92.3.4v69h-78.6l77.9 42.3 1.1 21.4-41.6-.5-113.8-55.8v56.3h-82.9v-56.3L48.6 196.6l-48.2.1v196.4h785.8V.3L395.4 0M.4 22.2 0 63l82.7 1L.4 22.2z"
            fill="#006"
          />
          <g fill="#009fca" fillRule="evenodd" transform="scale(.79241 .79977)">
            <path d="M496 0h496.1v496h-496z" />
            <rect
              height="251.4"
              rx="0"
              ry="0"
              width="525.8"
              x="-2.3"
              y="244.6"
            />
          </g>
          <path
            d="M593.3 122.7H621l-22.3 15.2 8.5 24.7-22.3-15.3-22.2 15.3 8.5-24.7-22.3-15.2h27.5l8.5-24.7zm-69.2 196.8h27.6l-22.3 15.2 8.5 24.7-22.3-15.3-22.3 15.3 8.6-24.7-22.3-15.2H507l8.5-24.7zm69.2-44.6H621l-22.3 15.2 8.5 24.7-22.3-15.3-22.2 15.3 8.5-24.7-22.3-15.2h27.5l8.5-24.7zM295.8 417.7h27.6L301 432.8l8.6 24.6-22.3-15.2-22.3 15.2 8.6-24.6-22.4-15.3h27.6l8.5-24.6zm62.6-76.5h-27.6l22.3-15.3-8.5-24.6 22.3 15.2 22.3-15.2-8.6 24.6 22.3 15.3h-27.5l-8.5 24.6zm81.3-112.5H412l22.3-15.2-8.5-24.7 22.3 15.3 22.3-15.3-8.6 24.7 22.3 15.2h-27.5l-8.5 24.7zm68.3-23.3h-27.6l22.4-15.3-8.6-24.6 22.3 15.2 22.3-15.2-8.6 24.6 22.4 15.3H525l-8.5 24.6zM439.7 400H412l22.3-15.2L426 360l22.3 15.2 22.3-15.2-8.6 24.7 22.3 15.2h-27.5l-8.5 24.7zm-81.3 19.9h-27.6l22.3-15.2-8.5-24.7 22.3 15.2 22.3-15.2-8.6 24.6L403 420h-27.5l-8.5 24.7z"
            fill="#fff40d"
            fillRule="evenodd"
          />
        </g>
      </FlagIconBase>
    );
  },
);
