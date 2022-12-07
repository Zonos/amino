import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const AvatarIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 42 44"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 18.45a8.95 8.95 0 0 0 6.364-2.665A9.152 9.152 0 0 0 30 9.35a9.152 9.152 0 0 0-2.636-6.435A8.95 8.95 0 0 0 21 .25a8.95 8.95 0 0 0-6.364 2.665A9.152 9.152 0 0 0 12 9.35c0 2.414.948 4.728 2.636 6.435A8.95 8.95 0 0 0 21 18.45ZM0 45.75c0-2.788.543-5.55 1.599-8.126a21.25 21.25 0 0 1 4.552-6.888 20.985 20.985 0 0 1 6.813-4.603 20.8 20.8 0 0 1 16.072 0 20.985 20.985 0 0 1 6.813 4.603 21.25 21.25 0 0 1 4.553 6.888A21.439 21.439 0 0 1 42 45.75H0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
