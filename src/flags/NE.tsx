import React, { forwardRef } from 'react';

import { FlagIconBase } from './FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const NE = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#0db02b" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 0h640v320H0z" />
      <path fill="#e05206" d="M0 0h640v160H0z" />
      <circle cx="320" cy="240" r="68" fill="#e05206" />
    </FlagIconBase>
  );
});
