import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const GG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#e8112d" d="M256 0h128v480H256z" />
      <path fill="#e8112d" d="M0 176h640v128H0z" />
      <path
        id={`${ids[0]}`}
        fill="#f9dd16"
        d="M110 286.7l23.3-23.4h210v-46.6h-210L110 193.3z"
      />
      <use
        width="36"
        height="24"
        transform="rotate(90 320 240)"
        xlinkHref="#a"
      />
      <use
        width="36"
        height="24"
        transform="rotate(-90 320 240)"
        xlinkHref="#a"
      />
      <use
        width="36"
        height="24"
        transform="rotate(180 320 240)"
        xlinkHref="#a"
      />
    </CountryIconBase>
  );
});
