import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const CF = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-12.4 32h640v480h-640z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          transform="translate(12.4 -32)"
        >
          <path d="M-52 32h719.3v119H-52z" fill="#00f" />
          <path d="M-52 391.6h719.3V512H-52z" fill="#ff0" />
          <path d="M-52 271.3h719.3v120.3H-52z" fill="#009a00" />
          <path d="M-52 151h719.3v120.3H-52z" fill="#fff" />
          <path d="M247.7 32.5h119.9V512H247.7z" fill="red" />
          <path
            d="m99.3 137.7-31.5-21.8-31.3 22L47.4 101 16.9 78l38.2-1 12.5-36.3L80.3 77l38.1.7L88.2 101"
            fill="#ff0"
          />
        </g>
      </FlagIconBase>
    );
  },
);
