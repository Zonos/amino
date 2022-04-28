import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';
import { useStableUniqueId } from '../FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const GR = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M0 0h120v90H0z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath={`url(#${ids[0]})`}
        transform="scale(5.33)"
      >
        <path fill="#0d5eaf" d="M0 0h135v10H0z" />
        <path fill="#fff" d="M0 10h135v10H0z" />
        <path fill="#0d5eaf" d="M0 20h135v10H0z" />
        <path fill="#fff" d="M0 30h135v10H0z" />
        <path fill="#0d5eaf" d="M0 40h135v10H0z" />
        <path fill="#fff" d="M0 50h135v10H0z" />
        <path fill="#0d5eaf" d="M0 60h135v10H0z" />
        <path fill="#fff" d="M0 70h135v10H0z" />
        <path fill="#0d5eaf" d="M0 80h135v10H0zM0 0h50v50H0z" />
        <g fill="#fff">
          <path d="M20 0h10v50H20z" />
          <path d="M0 20h50v10H0z" />
        </g>
      </g>
    </FlagIconBase>
  );
});
