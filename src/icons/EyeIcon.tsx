import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const EyeIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M12 5C8.974 5 6.958 6.458 5.722 8.038a9.303 9.303 0 0 0-1.31 2.288C4.149 10.991 4 11.61 4 12c0 .39.15 1.01.412 1.674.272.69.697 1.505 1.31 2.288C6.958 17.542 8.974 19 12 19s5.042-1.458 6.278-3.038a9.306 9.306 0 0 0 1.31-2.288C19.851 13.009 20 12.39 20 12c0-.39-.15-1.01-.412-1.674a9.307 9.307 0 0 0-1.31-2.288C17.042 6.458 15.026 5 12 5Zm-6.5 7c0-.11.07-.522.307-1.123a7.805 7.805 0 0 1 1.096-1.915C7.917 7.667 9.526 6.5 12 6.5s4.083 1.167 5.097 2.462a7.805 7.805 0 0 1 1.096 1.915c.237.601.307 1.013.307 1.123 0 .11-.07.522-.307 1.123a7.806 7.806 0 0 1-1.096 1.915C16.083 16.333 14.474 17.5 12 17.5s-4.083-1.167-5.097-2.462a7.806 7.806 0 0 1-1.096-1.915C5.569 12.522 5.5 12.11 5.5 12Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
