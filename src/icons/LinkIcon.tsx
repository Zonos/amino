import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LinkIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11.93 4.858a5.1 5.1 0 1 1 7.212 7.213l-2.829 2.828-1.555-1.555 2.828-2.829a2.9 2.9 0 0 0-4.101-4.101l-2.829 2.828-1.555-1.555 2.828-2.829Zm2.969 4.243a1.1 1.1 0 0 1 0 1.555L10.656 14.9a1.1 1.1 0 0 1-1.555-1.555L13.343 9.1a1.1 1.1 0 0 1 1.556 0Zm-5.657 1.555-2.828 2.829a2.9 2.9 0 1 0 4.1 4.101l2.83-2.828 1.555 1.555-2.828 2.829a5.1 5.1 0 0 1-7.213-7.213l2.829-2.828 1.555 1.555Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
