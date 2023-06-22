import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PlaneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M8.108 5.553A1.25 1.25 0 0 1 9.32 4h.852a3 3 0 0 1 2.12.879L15.415 8H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-5.586l-4.121 4.121A3 3 0 0 1 8.172 20H5.52c-1.048 0-1.63-1.212-.976-2.03L6.92 15A5 5 0 0 1 2 10V6.604C2 5.49 3.346 4.932 4.134 5.72L6.414 8H8.72l-.611-2.447ZM10.78 8h1.805l-1.707-1.707a1 1 0 0 0-.597-.287l.5 1.994Zm-1.3 7-2.4 3h1.09a1 1 0 0 0 .708-.293L11.586 15H9.48ZM4 8.414V10a3 3 0 0 0 3 3h13v-1a2 2 0 0 0-2-2H6.414A2 2 0 0 1 5 9.414l-1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);