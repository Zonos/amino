import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const BS = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-12 0h640v480H-12z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          transform="translate(12)"
        >
          <path d="M968.5 480h-979V1.8h979z" fill="#fff" />
          <path d="M968.5 344.5h-979V143.3h979z" fill="#ffe900" />
          <path
            d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"
            fill="#08ced6"
          />
          <path d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2-10.9 0z" />
        </g>
      </FlagIconBase>
    );
  },
);
