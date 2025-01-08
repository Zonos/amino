import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const LY = forwardRef<SVGSVGElement, Props>(
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
            <path d="M166.7-20h666.6v500H166.7z" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          transform="matrix(.96 0 0 .96 -160 19.2)"
        >
          <path d="M0-20h1000v500H0z" fill="#239e46" />
          <path d="M0-20h1000v375H0z" />
          <path d="M0-20h1000v125H0z" fill="#e70013" />
          <path
            d="M544.2 185.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z"
            fill="#fff"
          />
        </g>
      </FlagIconBase>
    );
  },
);
