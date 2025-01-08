import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const GB = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-85.3 0h682.6v512H-85.3z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          transform="translate(80) scale(.94)"
        >
          <g strokeWidth="1pt">
            <path d="M-256 0H768v512H-256z" fill="#012169" />
            <path
              d="M-256 0v57.2L653.5 512H768v-57.2L-141.5 0H-256zM768 0v57.2L-141.5 512H-256v-57.2L653.5 0H768z"
              fill="#fff"
            />
            <path
              d="M170.7 0v512h170.6V0H170.7zM-256 170.7v170.6H768V170.7H-256z"
              fill="#fff"
            />
            <path
              d="M-256 204.8v102.4H768V204.8H-256zM204.8 0v512h102.4V0H204.8zM-256 512 85.3 341.3h76.4L-179.7 512H-256zm0-512L85.3 170.7H9L-256 38.2V0zm606.4 170.7L691.7 0H768L426.7 170.7h-76.3zM768 512 426.7 341.3H503l265 132.5V512z"
              fill="#c8102e"
            />
          </g>
        </g>
      </FlagIconBase>
    );
  },
);
