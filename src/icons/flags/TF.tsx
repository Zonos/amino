import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const TF = forwardRef<SVGSVGElement, Props>(
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
            d="m0-21 12.3 38L-20-6.5h40L-12.3 17z"
            fill="#fff"
            id={`${uniqueId}-0`}
          />
        </defs>
        <path d="M0 0h640v480H0z" fill="#002395" />
        <path d="M0 0h292.8v196.8H0z" fill="#fff" />
        <path d="M0 0h96v192H0z" fill="#002395" />
        <path d="M192 0h96v192h-96z" fill="#ed2939" />
        <path
          d="m426 219.6 15.4 24.6h44V330l-33-51.6-44.4 70.8h21.6l22.8-40.8 46.8 84 46.8-84 22.8 40.8h21.6L546 278.4 513 330v-47.4h19.8l14.7-23.4H513v-15h44l15.4-24.6H426zm51.6 105h-48v16.8h48zm91.2 0h-48v16.8h48z"
          fill="#fff"
        />
        <use
          height="100%"
          transform="scale(1.2)"
          width="100%"
          x="416"
          xlinkHref={`#${uniqueId}-0`}
          y="362"
        />
        <use
          height="100%"
          transform="scale(1.2)"
          width="100%"
          x="371"
          xlinkHref={`#${uniqueId}-0`}
          y="328"
        />
        <use
          height="100%"
          transform="scale(1.2)"
          width="100%"
          x="461"
          xlinkHref={`#${uniqueId}-0`}
          y="328"
        />
        <use
          height="100%"
          transform="scale(1.2)"
          width="100%"
          x="333"
          xlinkHref={`#${uniqueId}-0`}
          y="227"
        />
        <use
          height="100%"
          transform="scale(1.2)"
          width="100%"
          x="499"
          xlinkHref={`#${uniqueId}-0`}
          y="227"
        />
      </FlagIconBase>
    );
  },
);
