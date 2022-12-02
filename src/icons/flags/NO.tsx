import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const NO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <path fill="#ed2939" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M180 0h120v480H180z" />
    <path fill="#fff" d="M0 180h640v120H0z" />
    <path fill="#002664" d="M210 0h60v480h-60z" />
    <path fill="#002664" d="M0 210h640v60H0z" />
  </FlagIconBase>
));
