import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.222 2.222a1.1 1.1 0 0 1 1.556 0L18.27 16.714l.017.017 3.49 3.491a1.1 1.1 0 1 1-1.555 1.556l-1.29-1.29c-.219.958-1.31 1.553-2.278 1.069L12 19.23l-4.655 2.327c-1.154.577-2.482-.38-2.3-1.657l.794-5.55-3.113-3.502a1.6 1.6 0 0 1 .808-2.615l2.514-.63-3.826-3.825a1.1 1.1 0 0 1 0-1.556ZM7.86 9.415a.89.89 0 0 1-.092.027l-2.738.685 2.639 2.969a1.6 1.6 0 0 1 .388 1.289l-.67 4.692 3.898-1.95a1.6 1.6 0 0 1 1.431 0l3.9 1.95-.152-1.059L7.86 9.415Zm2.769-6.266a1.6 1.6 0 0 1 2.744 0l2.337 3.894 4.757 1.19a1.6 1.6 0 0 1 .808 2.615l-2.119 2.383a1.1 1.1 0 1 1-1.644-1.462l1.46-1.642-4.037-1.01a1.6 1.6 0 0 1-.984-.729L12 5.138l-.557.928a1.1 1.1 0 1 1-1.886-1.132l1.07-1.785Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
