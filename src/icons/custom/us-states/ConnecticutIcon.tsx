import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const ConnecticutIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="m3.667 12.027 2.462 16.41 1.64 1.642-3.281 4.103 1.64.82H8.59l4.103-4.923 2.461-.82 1.641-2.462h1.641l4.103-1.641 4.102-.821-.82-1.641 2.461.82 1.641-.82 2.462-.82 1.641-.821h1.641V17.77L32.385 5.462l-17.23 4.923-.821-.82-10.667 2.462Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
