import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const GG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
      <path d="M0 0h640v480H0z" fill="#fff" />
      <path d="M256 0h128v480H256z" fill="#e8112d" />
      <path d="M0 176h640v128H0z" fill="#e8112d" />
      <path
        d="m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z"
        fill="#f9dd16"
        id={`${ids[0]}`}
      />
      <use
        height="24"
        transform="rotate(90 320 240)"
        width="36"
        xlinkHref={`#${ids[0]}`}
      />
      <use
        height="24"
        transform="rotate(-90 320 240)"
        width="36"
        xlinkHref={`#${ids[0]}`}
      />
      <use
        height="24"
        transform="rotate(180 320 240)"
        width="36"
        xlinkHref={`#${ids[0]}`}
      />
    </FlagIconBase>
  );
});
