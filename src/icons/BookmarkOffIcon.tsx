import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.222 2.222a1.1 1.1 0 0 1 1.556 0l18 18a1.1 1.1 0 1 1-1.556 1.556l-.82-.82A3.094 3.094 0 0 1 17 22.1h-.172a3.1 3.1 0 0 1-2.192-.908l-2-2a.9.9 0 0 0-1.272 0l-2 2a3.1 3.1 0 0 1-2.193.908H7A3.1 3.1 0 0 1 3.9 19v-7a1.1 1.1 0 0 1 2.2 0v7a.9.9 0 0 0 .9.9h.171a.9.9 0 0 0 .637-.264l2-2a3.1 3.1 0 0 1 4.384 0l2 2a.9.9 0 0 0 .636.264H17a.9.9 0 0 0 .819-.526L2.222 3.778a1.1 1.1 0 0 1 0-1.556ZM9 1.9h8A3.1 3.1 0 0 1 20.1 5v7a1.1 1.1 0 0 1-2.2 0V5a.9.9 0 0 0-.9-.9H9a1.1 1.1 0 1 1 0-2.2Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
