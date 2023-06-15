import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const NewHampshireIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m14.533 39 10.64-2.533 1.52-.507 1.012-2.027h.507l.507-1.013 1.013-.507h1.013v-1.52l.507-1.013-2.027-1.013v-1.52L27.2 26.333v-1.52l-1.013-2.533L19.093 1l-.507 1.013-1.52-.506-.506.506v1.014l-.507 1.52v1.52l.507 1.013-1.014 2.027 1.52 2.026-.506.507v1.013l-1.52 2.534-.507.506H13.52l-.507 1.014.507 1.52v3.546l-.507.507v2.027l-.506 1.013v1.52l-.507.507.507 3.04.506.506-.506 2.027.506 1.013v1.52l-.506.507v1.52L14.533 39Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
