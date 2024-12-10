import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HexagonIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      ref={ref}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M6.536 5.625A2.75 2.75 0 0 1 9.046 4h5.909a2.75 2.75 0 0 1 2.51 1.625l2.353 5.25a2.75 2.75 0 0 1 0 2.25l-2.354 5.25A2.75 2.75 0 0 1 14.954 20H9.046a2.75 2.75 0 0 1-2.51-1.625l-2.353-5.25a2.75 2.75 0 0 1 0-2.25l2.354-5.25Zm2.51-.125c-.493 0-.94.29-1.141.739l-2.354 5.25a1.25 1.25 0 0 0 0 1.022l2.354 5.25c.201.45.648.739 1.14.739h5.91c.492 0 .94-.29 1.14-.739l2.354-5.25a1.25 1.25 0 0 0 0-1.022l-2.353-5.25a1.25 1.25 0 0 0-1.141-.739h-5.91Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
