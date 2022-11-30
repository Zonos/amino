import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const GG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#e8112d" d="M256 0h128v480H256z" />
      <path fill="#e8112d" d="M0 176h640v128H0z" />
      <path
        id={`${ids[0]}`}
        fill="#f9dd16"
        d="m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z"
      />
      <use
        xlinkHref="#a"
        width="36"
        height="24"
        transform="rotate(90 320 240)"
      />
      <use
        xlinkHref="#a"
        width="36"
        height="24"
        transform="rotate(-90 320 240)"
      />
      <use
        xlinkHref="#a"
        width="36"
        height="24"
        transform="rotate(180 320 240)"
      />
    </FlagIconBase>
  );
});
