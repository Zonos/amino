import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const GG = forwardRef<SVGSVGElement, Props>(
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
        <path d="M0 0h640v480H0z" fill="#fff" />
        <path d="M256 0h128v480H256z" fill="#e8112d" />
        <path d="M0 176h640v128H0z" fill="#e8112d" />
        <path
          d="m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z"
          fill="#f9dd16"
          id={`${uniqueId}-0`}
        />
        <use
          height="24"
          transform="rotate(90 320 240)"
          width="36"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="24"
          transform="rotate(-90 320 240)"
          width="36"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="24"
          transform="rotate(180 320 240)"
          width="36"
          xlinkHref={`#${uniqueId}-0`}
        />
      </FlagIconBase>
    );
  },
);
