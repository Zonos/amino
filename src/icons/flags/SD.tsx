import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const SD = forwardRef<SVGSVGElement, Props>(
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
            <path d="M0 0h682.7v512H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="scale(.9375)"
        >
          <path d="M0 341.3h1024V512H0z" />
          <path d="M0 170.6h1024v170.7H0z" fill="#fff" />
          <path d="M0 0h1024.8v170.7H0z" fill="red" />
          <path d="M0 0v512l341.3-256L0 0z" fill="#009a00" />
        </g>
      </FlagIconBase>
    );
  },
);
