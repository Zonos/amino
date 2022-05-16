import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const GH = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#006b3f" d="M0 0h640v480H0z" />
      <path fill="#fcd116" d="M0 0h640v320H0z" />
      <path fill="#ce1126" d="M0 0h640v160H0z" />
      <path d="m320 160 52 160-136.1-98.9H404L268 320z" />
    </FlagIconBase>
  );
});
