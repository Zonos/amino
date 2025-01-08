import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const JP = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-88 32h640v480H-88z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="translate(88 -32)"
        >
          <path d="M-128 32h720v480h-720z" fill="#fff" />
          <circle
            cx="523.1"
            cy="344.1"
            fill="#d30000"
            r="194.9"
            transform="translate(-168.4 8.6) scale(.76554)"
          />
        </g>
      </FlagIconBase>
    );
  },
);
