import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const NebraskaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M9.646 22.26v5.831s8.016.091 12.024.037c5.776-.08 17.33-.439 17.33-.439l-.402-.402v-.402l-.402-.604-.603-.402-.403-1.005-.402-.201v-.804l-.402-.402v-2.414l-.402-.402.402-.202-.603-.402v-.603l-.603-.603.201-1.207-.402-.402v-.603l-.402-.201-.201-.603-.402-.201v-.805l-.201-1.005h-.805l-.402-.603v-.402h-.603l-.201-.201-.603-.201h-.603l-.604-.604-1.005.201H27.54l-.402.402h-.604l-1.608-1.005s-9.855.033-14.782-.051C7.23 11.3 1.402 11 1.402 11L1 22.26h8.646Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.056"
      />
    </StateIconBase>
  )
);
