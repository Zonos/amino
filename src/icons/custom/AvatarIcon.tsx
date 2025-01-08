import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const AvatarIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 42 44"
    >
      <path
        clipRule="evenodd"
        d="M21 18.45a8.95 8.95 0 0 0 6.364-2.665A9.15 9.15 0 0 0 30 9.35a9.15 9.15 0 0 0-2.636-6.435A8.95 8.95 0 0 0 21 .25a8.95 8.95 0 0 0-6.364 2.665A9.15 9.15 0 0 0 12 9.35c0 2.414.948 4.728 2.636 6.435A8.95 8.95 0 0 0 21 18.45M0 45.75c0-2.788.543-5.55 1.599-8.126a21.3 21.3 0 0 1 4.552-6.888 21 21 0 0 1 6.813-4.603 20.8 20.8 0 0 1 16.072 0 21 21 0 0 1 6.813 4.603 21.3 21.3 0 0 1 4.553 6.888A21.4 21.4 0 0 1 42 45.75z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
