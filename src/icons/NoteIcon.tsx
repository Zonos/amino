import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const NoteIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M7.75 8.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M12 11.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H9.147L4 13.77zM6.75 5.5c-.69 0-1.25.56-1.25 1.25v6h3c.966 0 1.75.784 1.75 1.75v4h7c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25zm2 11.665L6.342 14.25H8.5a.25.25 0 0 1 .25.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
