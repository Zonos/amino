import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClearIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9 4.1A4.9 4.9 0 0 0 4.1 9v10.9H15a4.9 4.9 0 0 0 4.9-4.9v-.9h-3.4c-.909 0-1.543-.722-1.62-1.49a3.902 3.902 0 0 0-3.49-3.49c-.768-.077-1.49-.712-1.49-1.62V4.1H9ZM1.9 9A7.1 7.1 0 0 1 9 1.9h1.5a1.6 1.6 0 0 1 1.6 1.6v3.499a6.105 6.105 0 0 1 4.9 4.9h3.5a1.6 1.6 0 0 1 1.6 1.6V15a7.1 7.1 0 0 1-7.1 7.1H4A2.1 2.1 0 0 1 1.9 20V9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M13.503 4.285a1.1 1.1 0 0 1 1.443-.582 10.1 10.1 0 0 1 5.293 5.218 1.1 1.1 0 0 1-2.012.889 7.9 7.9 0 0 0-4.14-4.082 1.1 1.1 0 0 1-.584-1.443Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
