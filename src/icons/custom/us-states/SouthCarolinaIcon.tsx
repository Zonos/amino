import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const SouthCarolinaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m6.579 9.684-2.088.895-.596.895L3 13.264l1.491.596.298.298.895.597 1.193-.298v.894l.895.597.298.895.298.298.895.597.298.894h.597l.298.597 1.491.596.895 1.492h.895l.895.895v.596l.894.298v.597l.597.298v.597h.894l1.492.895v.596l.596.895.299 1.193.298.596h.894l.299.597.895 1.193v1.193l.596.895.298-.298h1.193l.298-.895v-.895l.597.597-.895-1.492-.596-1.193.298-.298.895 1.491.596.299-.298-1.194.596.597.299.895.596-.597-.298-.895-.597-.298-.596-.298 1.193-.298.895.298.596-.597v-.596h.895l.895-.597.596-.596-.596-.597v-.596h.596l.298.596.597-.596.596-.597v-1.193l.597-.298.596.298.597-.895-.298-.596 1.192-.597-.894-.298v-.895l.596-.895v1.492l.895-2.685.895-1.491L37 14.457l-8.65-6.264-7.754 1.193-.298-1.193-1.193-.895-.596.597L18.21 7 9.264 8.193 8.07 8.79l-.895.298-.298.596H6.58Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
