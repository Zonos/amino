import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const IdahoIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m31.41 38 1.059-12.177-.882-1.235h-.353l-.353.706h-1.059l-.176-.176-1.588-.177-.353.53-1.236-.353-.353.53-.705-.707-.353-1.412h-.53l-.53-.529.177-.706-.705-1.412-.353-1.411-.353-.706-1.412 1.058-.706-.705v-1.06l.53-.176-.177-1.411.353-.177.706-2.117h-1.059v-.53h-.353l-.706-.706.177-.353L18.882 11l-.53-.353-.706-.882h.177l-.177-.53.177-.353L17.47 8l-.706-1.059.706-4.412L14.117 2l-1.94 12.177.352.705v.353l-.176.177.176 1.059 1.059.882.176.882-.882 1.06-.176.352L12 20.706l-.177.53-.706.705L10.236 23l-.176 1.059.706.176.352.353-.352.353v.53l-.353.706L9 35l11.117 1.588L31.41 38Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
