import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const MontanaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M26.309 28.85c3.545.244 11.24.432 11.24.432L38 13.163s-5.55-.192-11.44-.61c-3.523-.251-7.167-.68-9.819-.928C12.028 11.184 2.603 10 2.603 10L2 13.766l.603.904.3.753-.15.301.15.452h-.15l.603.753.452.302 1.054 1.355-.15.302.602.602h.301v.452h.904l-.603 1.808-.3.15.15 1.206-.452.15v.904l.602.602 1.205-.903.302.602.3 1.205.603 1.206-.15.602.452.452h.451l.302 1.205.602.603.301-.452 1.055.301.301-.452 1.356.15.15.151h.904l.301-.602h.302l.753 1.054.15-.15.151-1.959s6.867.817 10.602 1.074Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
