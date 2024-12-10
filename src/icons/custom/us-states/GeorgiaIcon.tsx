import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const GeorgiaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="M18.847 4 4 6.048l4.608 14.336 1.024 2.304.768 1.024v1.024l.768.256-.768.768v1.28l-.512.512v1.28l1.024 1.28-.257 2.56.769.768.256.768.511.768.256 1.024 15.103-1.024 1.536-.256v.512l.512.768h.768l.256-1.536-.512-.256v-1.024l.512-.512 1.28.256h1.536l-.512-.768.512-1.024h-.512l.256-.512-.256-.512v-1.024h.512v.768l.512-1.024-1.28-.256v-.512l1.28.256-.256-.512.768-.768-.768.256-.512-.512 1.024-.256-.512-.512.256-.512-.512-.256h1.024l.256-.512-.768-.256.256-.512 1.024.256v-.512l.512-.512-.768-.256-.512-.256-.256.256-.512-.768v-1.024l-.768-1.024-.256-.512h-.768l-.256-.512-.256-1.024-.512-.768V16.8l-1.28-.768h-.768v-.512l-.512-.256v-.512l-.768-.256v-.512l-.768-.768h-.767l-.768-1.28-1.28-.512-.256-.512h-.512l-.256-.768-.768-.512-.256-.256-.256-.768-.768-.512v-.768l-1.024.256-.768-.512-.256-.256-.768-.256-.512-.256.512-1.024.256-.512.512-.768Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
