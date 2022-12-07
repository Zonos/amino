import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CubeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11.111 2.324a2 2 0 0 1 1.777 0l7.25 3.595a2 2 0 0 1 1.112 1.792v8.578a2 2 0 0 1-1.111 1.792l-7.25 3.595a2 2 0 0 1-1.777 0l-7.25-3.595a2 2 0 0 1-1.112-1.792V7.71a2 2 0 0 1 1.111-1.79l7.25-3.595ZM4.75 8.703l6.25 3.1v7.585l-6.25-3.1V8.704ZM13 19.388l6.25-3.1V8.704l-6.25 3.1v7.585Zm-1-9.322 5.999-2.975L12 4.116 6.001 7.091 12 10.066Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
