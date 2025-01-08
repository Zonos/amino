import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LockIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.75 14.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M15.5 6.75V9.5h.75A2.75 2.75 0 0 1 19 12.25v5A2.75 2.75 0 0 1 16.25 20h-8.5A2.75 2.75 0 0 1 5 17.25v-5A2.75 2.75 0 0 1 7.75 9.5h.75V6.75A2.75 2.75 0 0 1 11.25 4h1.5a2.75 2.75 0 0 1 2.75 2.75m-5.5 0c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25V9.5h-4zm-3.5 5.5c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
