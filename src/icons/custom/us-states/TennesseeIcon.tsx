import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const TennesseeIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m1 27.001 27.4-3.2v-1.4l.2-.2.8.2.2-1.2 1.2-1h1l1.4-1.6h.8l.2-1h.4l.2-.6.6-.2.2.4h.4l.4-1 1-.2.4.2.6-1.4.4-.4h.2V13l-8.8 1.4-.4.4-18.4 1.8h-1.2l.2.6v.4l-6.2.6-.2.2-.4-.4v.4l.2.8h-.4l.2.6h-.4l.4.6-.4.2-.2.6.4.2.2.2H3v.4l.2.2-1 .6.2.8v.4H2l-.2.8-.2.6.4.8h-.6l-.4.801Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
