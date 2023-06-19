import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const NewJerseyIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m15.97 1 10.208 3.403.567.567-.567 2.269V8.94l-1.134.567-.567 1.135-.567 1.701.567 1.135 2.268.567h1.134l.568 2.836-.567 2.835v3.403l-.568.568.567 1.134-.567 2.269-.567.567h-1.134l1.134 1.701h-1.134v1.134l.567.568h-1.134l-.567 1.134-1.134.567 1.134.567-1.134 2.269v.567l-.568.567v1.135L21.641 39v-3.97h-2.268l-1.135.567-.567-1.134H15.97l-.567-1.135h-1.135l-1.7-1.134v-1.702L12 29.925l.567-1.701V27.09h.567l1.134-1.702 1.135-1.134v-1.135l3.97-3.403v-1.134l-3.403-2.269h-1.134l-.568-2.268-1.7.567L12 12.343l.567-1.701.567-1.135L12 8.373V7.24l1.134-1.135 1.134-2.268V2.7L15.97 1Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
