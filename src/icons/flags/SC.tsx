import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const SC = forwardRef<SVGSVGElement, Props>(
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
          <path d="M0 0h992.1v512H0z" fill="red" />
          <path d="m0 512 992.1-170.7V512H0z" fill="#090" />
          <path d="m0 512 992.1-341.3v170.6L0 512z" fill="#fff" />
          <path d="M0 512V0h330.7L0 512z" fill="#009" />
          <path d="M0 512 330.7 0h330.7L0 512z" fill="#ff0" />
        </g>
      </FlagIconBase>
    );
  },
);
