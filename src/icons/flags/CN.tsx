import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const CN = forwardRef<SVGSVGElement, Props>(
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
          <path
            d="M-.6.8 0-1 .6.8-1-.3h2z"
            fill="#ffde00"
            id={`${uniqueId}-0`}
          />
        </defs>
        <path d="M0 0h640v480H0z" fill="#de2910" />
        <use
          height="20"
          transform="matrix(71.9991 0 0 72 120 120)"
          width="30"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="20"
          transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"
          width="30"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="20"
          transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"
          width="30"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="20"
          transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"
          width="30"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="20"
          transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"
          width="30"
          xlinkHref={`#${uniqueId}-0`}
        />
      </FlagIconBase>
    );
  },
);
