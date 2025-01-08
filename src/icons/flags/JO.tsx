import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const JO = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-117.8 0h682.6v512h-682.6z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          transform="translate(110.5) scale(.9375)"
        >
          <g fillRule="evenodd" strokeWidth="1pt">
            <path d="M-117.8 0h1024v170.7h-1024z" />
            <path d="M-117.8 170.7h1024v170.6h-1024z" fill="#fff" />
            <path d="M-117.8 341.3h1024V512h-1024z" fill="#090" />
            <path d="m-117.8 512 512-256-512-256v512z" fill="red" />
            <path
              d="m24.5 289 5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
              fill="#fff"
            />
          </g>
        </g>
      </FlagIconBase>
    );
  },
);
