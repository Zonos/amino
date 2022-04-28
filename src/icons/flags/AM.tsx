import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const AM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="red" d="M0 0h640v160H0z" />
      <path fill="#00f" d="M0 160h640v160H0z" />
      <path fill="orange" d="M0 320h640v160H0z" />
    </FlagIconBase>
  );
});
