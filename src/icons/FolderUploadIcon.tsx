import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FolderUploadIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5 6.1a.9.9 0 0 0-.9.9v10a.9.9 0 0 0 .9.9h8a1.1 1.1 0 0 1 0 2.2H5A3.1 3.1 0 0 1 1.9 17V7A3.1 3.1 0 0 1 5 3.9h4.882a2.91 2.91 0 0 1 2.602 1.608c.12.24.365.392.634.392H19A3.1 3.1 0 0 1 22.1 9v2a1.1 1.1 0 0 1-2.2 0V9a.9.9 0 0 0-.9-.9h-5.882a2.91 2.91 0 0 1-2.602-1.608.709.709 0 0 0-.634-.392H5Zm15.1 11.556.122.122a1.1 1.1 0 1 0 1.556-1.556l-1.647-1.646a1.6 1.6 0 0 0-2.262 0l-1.647 1.646a1.1 1.1 0 1 0 1.556 1.556l.122-.122V21a1.1 1.1 0 0 0 2.2 0v-3.345Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
