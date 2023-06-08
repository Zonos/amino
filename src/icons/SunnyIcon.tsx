import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SunnyIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 1.9A1.1 1.1 0 0 1 13.1 3v1a1.1 1.1 0 0 1-2.2 0V3A1.1 1.1 0 0 1 12 1.9ZM4.722 4.722a1.1 1.1 0 0 1 1.556 0l1 1a1.1 1.1 0 1 1-1.556 1.556l-1-1a1.1 1.1 0 0 1 0-1.556Zm14.556 0a1.1 1.1 0 0 1 0 1.556l-1 1a1.1 1.1 0 1 1-1.556-1.556l1-1a1.1 1.1 0 0 1 1.556 0ZM12 9.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8ZM6.9 12a5.1 5.1 0 1 1 10.2 0 5.1 5.1 0 0 1-10.2 0Zm-5 0A1.1 1.1 0 0 1 3 10.9h1a1.1 1.1 0 0 1 0 2.2H3A1.1 1.1 0 0 1 1.9 12Zm17 0a1.1 1.1 0 0 1 1.1-1.1h1a1.1 1.1 0 0 1 0 2.2h-1a1.1 1.1 0 0 1-1.1-1.1ZM7.278 16.722a1.1 1.1 0 0 1 0 1.556l-1 1a1.1 1.1 0 1 1-1.556-1.556l1-1a1.1 1.1 0 0 1 1.556 0Zm9.444 0a1.1 1.1 0 0 1 1.556 0l1 1a1.1 1.1 0 1 1-1.556 1.556l-1-1a1.1 1.1 0 0 1 0-1.556ZM12 18.9a1.1 1.1 0 0 1 1.1 1.1v1a1.1 1.1 0 0 1-2.2 0v-1a1.1 1.1 0 0 1 1.1-1.1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
