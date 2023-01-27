import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkOffWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-.899-.899A2.995 2.995 0 0 1 17 22h-.172a3 3 0 0 1-2.12-.879l-2-2a1 1 0 0 0-1.415 0l-2 2A3 3 0 0 1 7.172 22H7a3 3 0 0 1-3-3v-7a1 1 0 1 1 2 0v7a1 1 0 0 0 1 1h.172a1 1 0 0 0 .707-.293l2-2a3 3 0 0 1 4.242 0l2 2a1 1 0 0 0 .707.293H17a1 1 0 0 0 .937-.65L2.293 3.708a1 1 0 0 1 0-1.414ZM8 3a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v7a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
