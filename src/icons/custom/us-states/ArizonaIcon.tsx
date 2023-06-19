import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArizonaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M20.23 5.01c4.425.474 13.277 1.236 13.277 1.236L31.074 36l-8.982-.748L6 27.204l.187-.562.374-.561.187-.187.562.187h.187l.374-.749v-.748l-.748-.187-.187-.375.187-.561v-1.123h.561l.374-.748.375-1.497v-.375l.374-.374.187-.374.748-.375.562-.56-.936-.937-.187-1.122-.561-1.123v-1.31l.374-.187v-.749l-.187-.936.187-.56-.187-.937.187-.374-.187-.561.187-.749.748-.374.562.374.374-.187.187.749h.562l.56-1.123L12.55 4s5.12.736 7.68 1.01Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
