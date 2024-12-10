import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const IowaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="M7.18 31.016s7.422-.163 11.133-.374c3.886-.22 11.658-.921 11.658-.921l1.813 1.554.26-.259-.26-1.036 1.554-1.036v-1.036l1.036-1.036-.259-.777-1.036-1.036.518-1.554 2.072-.518 1.554-1.036v-1.037l.777-.777-.259-2.072-1.554-.518v-.777l-1.295-1.036-.518-1.295H32.82l-.777-1.554-.259-1.813.518-.777-.777-.518L31.266 9 2 10.554v.518l.518.518-.259.777.518.518-.259 2.072-.518.777.777 1.813h.518l.259 1.295v1.037l.518.258.259.777.518.26v.777l.518.518-.26 1.554.778.777v.777l.777.518-.518.259.518.518v3.108l.518.518v.518Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
