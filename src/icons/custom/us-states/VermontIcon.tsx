import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const VermontIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M10 7.217 28.781 2l.522.522.522 1.043-1.044 2.087 1.565 2.087-.521.522v1.043l-1.565 2.609-.522.522h-1.043l-.522 1.043.522 1.566v3.652l-.522.521v2.087l-.522 1.044v1.565l-.522.522.522 3.13.522.522-.522 2.087.522 1.043v1.566l-.522.521v1.566l2.087 1.565L18.869 38l-.522-.522-2.087-9.391v-1.043L15.217 26l-1.043 1.044v-3.131l-.522-.522v-.521l-.522-.522-.522-1.565h-.521v-2.61l.521-1.043-1.043-1.565-.522-2.087-.521-1.043V9.826L10 9.304V7.217Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
