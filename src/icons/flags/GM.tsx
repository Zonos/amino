import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const GM = forwardRef<SVGSVGElement, Props>(
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
            <path d="M0-48h640v480H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="translate(0 48)"
        >
          <path d="M0-128h640V85.3H0z" fill="red" />
          <path d="M0 85.3h640V121H0z" fill="#fff" />
          <path d="M0 120.9h640V263H0z" fill="#009" />
          <path d="M0 263.1h640v35.6H0z" fill="#fff" />
          <path d="M0 298.7h640V512H0z" fill="#090" />
        </g>
      </FlagIconBase>
    );
  },
);
