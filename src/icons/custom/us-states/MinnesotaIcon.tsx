import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const MinnesotaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="M30.798 34.8 9 36l-.2-9.8-.4-.6-.8-.2-.6-1.2.6-.4.4-.6.2-.6-.2-2-.6-.8-.2-.8-.2-1.4v-.4l-.2-1v-1.6l-.2-1.2-1.2-2.6V8.6l.2-.6L5 6.4l8.2-.4V4l.8.2.4.6.4 1.2v.8l.6.6h1.2l.2.2 1.6.2.199.6.6-.2h.8l.2-.4.6-.2h1.2l.4.2h.8v.4h-.4l.2.2h.8l.2.8.4.2.2.2.2-.8h.8l.2.6h1l.2.6h.4l.2.4 1-.4.4-.2 1.2-.8.6.8.8-.2 1.799-.2.6.6.4-.2h.8l-1.4 1-2.2.8-1.4 1.2-1.6 1.8-1.6 1.6-1 .6-.2.6-.2.4h-.4l.2 2V21l-.6.4-1 .6-.2.6-.4.6v.6l.6.2.4.6-.2.8-.2.6.2.4-.2.2.2.4-.2 1.2 1 .8h.8l.6.6.8.2.8.8.6.8.6.4h.8l.8.8.2.6v1.6Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
