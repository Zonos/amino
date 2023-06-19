import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const DelawareIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m18.307 38 11.076-2.77 1.846-.922v-.923l-.923-1.846-2.769.922.923-1.846V28.77l1.846-.923-1.846-.923L26.614 26l-2.769-1.846v-1.846l-3.692-1.846v-3.693l-5.538-4.615v-2.77l-.923-.922V6.615l1.846-1.846L16.461 2H12.77l-1.846 1.846L10 6.616 18.307 38Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".947"
      />
    </StateIconBase>
  )
);
