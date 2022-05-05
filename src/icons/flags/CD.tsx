import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const CD = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#007fff" d="M0 0h640v480H0z" />
      <path
        fill="#f7d618"
        d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2L28.8 96zM600 0 0 360v120h40l600-360V0h-40"
      />
      <path fill="#ce1021" d="M640 0 0 384v96L640 96V0" />
    </FlagIconBase>
  );
});
