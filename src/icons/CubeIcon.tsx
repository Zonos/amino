import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CubeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.41 4.112a1 1 0 0 0-.82 0l-7 3.154a1 1 0 0 0-.59.912v7.644a1 1 0 0 0 .59.912l7 3.153a1 1 0 0 0 .82 0l7-3.153a1 1 0 0 0 .59-.912V8.178a1 1 0 0 0-.59-.912l-7-3.154Zm-5.712 3.85L12 5.571l5.302 2.39L12 10.422 6.698 7.961ZM5.5 9.058v6.44l5.75 2.59v-6.36L5.5 9.059Zm7.25 9.03 5.75-2.59v-6.44l-5.75 2.67v6.36Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
