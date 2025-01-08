import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const PA = forwardRef<SVGSVGElement, Props>(
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
          <path d="M0 0h640v480H0z" fill="#fff" />
          <path d="M92.5 0h477.2v480H92.4z" fill="#fff" fillRule="evenodd" />
          <path d="M323 3.6h358v221.7H323z" fill="#db0000" fillRule="evenodd" />
          <path
            d="M3.2 225.3h319.9V480H3.2zm211.6-47.6-42-29.4-41.7 29.6 15.5-48L105 100l51.6-.4 16-48 16.3 47.9h51.6l-41.5 30 15.9 48z"
            fill="#0000ab"
            fillRule="evenodd"
          />
          <path
            d="m516.9 413.9-42.4-27.7-42.1 28 15.6-45.6-42-28 52-.5 16.2-45.4 16.4 45.3h52l-41.8 28.5 16 45.4z"
            fill="#d80000"
            fillRule="evenodd"
          />
        </g>
      </FlagIconBase>
    );
  },
);
