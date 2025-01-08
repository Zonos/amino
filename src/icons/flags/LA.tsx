import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const LA = forwardRef<SVGSVGElement, Props>(
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
        <g clipPath={`url(#${uniqueId}-0)`} fillRule="evenodd">
          <path d="M-40 0h720v480H-40z" fill="#ce1126" />
          <path d="M-40 119.3h720v241.4H-40z" fill="#002868" />
          <path
            d="M423.4 240a103.4 103.4 0 1 1-206.8 0 103.4 103.4 0 1 1 206.8 0z"
            fill="#fff"
          />
        </g>
      </FlagIconBase>
    );
  },
);
