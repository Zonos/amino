import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ScanSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 15a1 1 0 0 1 1 1c0 .994.009 1.295.068 1.518a2 2 0 0 0 1.414 1.414c.223.06.524.068 1.518.068a1 1 0 1 1 0 2h-.137c-.796 0-1.387 0-1.898-.136a4 4 0 0 1-2.829-2.829C3 17.524 3 16.933 3 16.138V16a1 1 0 0 1 1-1Zm12 6h.138c.795 0 1.386 0 1.897-.136a4 4 0 0 0 2.829-2.829c.137-.511.137-1.102.136-1.897V16a1 1 0 1 0-2 0c0 .994-.009 1.295-.068 1.518a2 2 0 0 1-1.414 1.414c-.223.06-.524.068-1.518.068a1 1 0 1 0 0 2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0-4.5c0-1.398 0-2.097.228-2.648a3 3 0 0 1 1.624-1.624C5.403 3 6.102 3 7.5 3h9c1.398 0 2.097 0 2.648.228a3 3 0 0 1 1.624 1.624C21 5.403 21 6.102 21 7.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C20.199 9 19.966 9 19.5 9h-15c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C3 8.199 3 7.966 3 7.5Z"
      />
    </IconBase>
  )
);
