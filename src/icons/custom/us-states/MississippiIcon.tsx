import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const MississippiIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="m28.52 2 .261.522.522.26v22.435l1.565 10.435-.26.783-1.044-.522-.261.26h-.783l-1.043-.52-1.043.782-.783.521-.782-.521v.521l-.261.783-1.305.261v-.522l-.521-1.304-.783-.783-.26-.782.26-1.826v-.522l-11.738 1.043v-1.043L10 31.217h.522l.26-.521-.26-1.044.521-.782.522-1.826 1.565-1.305-.26-1.043h.26l.522-1.566-1.043-.782v-.783l-.522-.782.521-.261-.26-.261-.261-.522.521-.783-.782-.521v-.783l.522-.522-.522-.782v-1.304l-.522-.522.522-.522-.522-.522.783-1.043-.261-1.305 1.043-.521.261-.261-.522-.522 1.044-1.043V8.26l.783-.522V5.391h.782V4.61L16 4.087v-.783L28.52 2Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
