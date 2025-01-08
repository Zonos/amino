import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const FO = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-78 32h640v480H-78z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          strokeWidth="0"
          transform="translate(78 -32)"
        >
          <path d="M-78 32h663.9v480H-78z" fill="#fff" />
          <path
            d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186V218.7z"
            fill="#003897"
          />
          <path
            d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76v-53.4z"
            fill="#d72828"
          />
        </g>
      </FlagIconBase>
    );
  },
);
