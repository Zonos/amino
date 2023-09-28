import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TaxIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.906 19.437c.464.955 1.885.62 1.885-.443v-4.521a3.76 3.76 0 0 0 2.98-3.692c0-.62-.149-1.206-.412-1.723l4.246-3.253c.759-.581.352-1.805-.6-1.805H4.995c-.736 0-1.216.78-.892 1.448l6.803 13.99Zm.395-5.391v2.788L5.792 5.507h11.734l-3.413 2.615c-.46.352-.497.975-.218 1.39.244.361.386.797.386 1.27a2.25 2.25 0 0 1-2.048 2.252c-.484.04-.932.442-.932 1.012Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M14.778 16.39a.758.758 0 0 0-.32 1.016.741.741 0 0 0 1.005.323 7.544 7.544 0 0 0 4.033-6.697 7.62 7.62 0 0 0-.333-2.232.744.744 0 0 0-.932-.497.755.755 0 0 0-.491.943c.172.563.266 1.163.266 1.786a6.035 6.035 0 0 1-3.228 5.358Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
