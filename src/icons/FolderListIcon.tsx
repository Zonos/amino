import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FolderListIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5 6.1a.9.9 0 0 0-.9.9v10a.9.9 0 0 0 .9.9h14a.9.9 0 0 0 .9-.9V9a.9.9 0 0 0-.9-.9h-5.882a2.91 2.91 0 0 1-2.602-1.608.709.709 0 0 0-.634-.392H5ZM1.9 7A3.1 3.1 0 0 1 5 3.9h4.882a2.91 2.91 0 0 1 2.602 1.608c.12.24.365.392.634.392H19A3.1 3.1 0 0 1 22.1 9v8a3.1 3.1 0 0 1-3.1 3.1H5A3.1 3.1 0 0 1 1.9 17V7Zm5.99 4a1.1 1.1 0 0 1 1.1-1.1H9a1.1 1.1 0 1 1 0 2.2h-.01a1.1 1.1 0 0 1-1.1-1.1Zm4.01 0A1.1 1.1 0 0 1 13 9.9h2a1.1 1.1 0 1 1 0 2.2h-2a1.1 1.1 0 0 1-1.1-1.1Zm-4.01 4a1.1 1.1 0 0 1 1.1-1.1H9a1.1 1.1 0 0 1 0 2.2h-.01a1.1 1.1 0 0 1-1.1-1.1Zm4.01 0a1.1 1.1 0 0 1 1.1-1.1h2a1.1 1.1 0 0 1 0 2.2h-2a1.1 1.1 0 0 1-1.1-1.1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
