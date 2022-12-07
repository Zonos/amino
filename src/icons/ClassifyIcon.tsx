import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClassifyIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 5.941 4.63 19h14.74L12 5.941Zm-.796-1.41v-.002.002Zm1.692-1.002a1.023 1.023 0 0 0-1.792 0L2.14 19.412c-.398.706.1 1.588.897 1.588h17.926c.797 0 1.295-.882.897-1.588L12.896 3.529Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
