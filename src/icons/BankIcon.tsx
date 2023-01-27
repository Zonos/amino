import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BankIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.262 3.102a2.1 2.1 0 0 1 1.475 0l7 2.625A2.1 2.1 0 0 1 21.1 7.693V9a2.1 2.1 0 0 1-2 2.098v3.804a2.1 2.1 0 0 1 2 2.098v2a2.1 2.1 0 0 1-2.1 2.1H5A2.1 2.1 0 0 1 2.9 19v-2a2.1 2.1 0 0 1 2-2.098v-3.804A2.1 2.1 0 0 1 2.9 9V7.693a2.1 2.1 0 0 1 1.363-1.966l7-2.625ZM7.1 11.1v3.8h1.8v-3.8H7.1Zm4 0v3.8h1.8v-3.8h-1.8Zm4 0v3.8h1.8v-3.8h-1.8ZM12 5.175 5.1 7.762V8.9h13.8V7.762L12 5.175ZM5.1 17.1v1.8h13.8v-1.8H5.1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
