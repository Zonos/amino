import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const ST = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#12ad2b" d="M0 0h640v480H0z" />
      <path fill="#ffce00" d="M0 137.1h640V343H0z" />
      <path fill="#d21034" d="M0 0v480l240-240" />
      <g id={`${ids[0]}`} transform="translate(351.6 240) scale(.34286)">
        <g id={`${ids[1]}`}>
          <path
            id={`${ids[2]}`}
            d="M0-200V0h100"
            transform="rotate(18 0 -200)"
          />
          <use
            xlinkHref="#a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          />
        </g>
        <use xlinkHref="#b" width="100%" height="100%" transform="rotate(72)" />
        <use
          xlinkHref="#b"
          width="100%"
          height="100%"
          transform="rotate(144)"
        />
        <use
          xlinkHref="#b"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
        <use
          xlinkHref="#b"
          width="100%"
          height="100%"
          transform="rotate(-72)"
        />
      </g>
      <use
        xlinkHref="#c"
        width="100%"
        height="100%"
        x="700"
        transform="translate(-523.2)"
      />
    </FlagIconBase>
  );
});
