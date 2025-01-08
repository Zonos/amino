import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const CG = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-79.5 32h640v480h-640z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="translate(79.5 -32)"
        >
          <path d="M-119.5 32h720v480h-720z" fill="#ff0" />
          <path d="M-119.5 32v480l480-480h-480z" fill="#00ca00" />
          <path d="M120.5 512h480V32l-480 480z" fill="red" />
        </g>
      </FlagIconBase>
    );
  },
);
