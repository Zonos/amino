import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const GR = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <FlagIconBase
        borderRadius={borderRadius}
        height={height}
        ref={ref}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <clipPath id={`${ids[0]}`}>
            <path d="M0 0h120v90H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${ids[0]})`}
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="scale(5.33)"
        >
          <path d="M0 0h135v10H0z" fill="#0d5eaf" />
          <path d="M0 10h135v10H0z" fill="#fff" />
          <path d="M0 20h135v10H0z" fill="#0d5eaf" />
          <path d="M0 30h135v10H0z" fill="#fff" />
          <path d="M0 40h135v10H0z" fill="#0d5eaf" />
          <path d="M0 50h135v10H0z" fill="#fff" />
          <path d="M0 60h135v10H0z" fill="#0d5eaf" />
          <path d="M0 70h135v10H0z" fill="#fff" />
          <path d="M0 80h135v10H0zM0 0h50v50H0z" fill="#0d5eaf" />
          <g fill="#fff">
            <path d="M20 0h10v50H20z" />
            <path d="M0 20h50v10H0z" />
          </g>
        </g>
      </FlagIconBase>
    );
  },
);
