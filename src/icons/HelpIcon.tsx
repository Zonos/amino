import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelpIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 15.25a.75.75 0 0 1 .75.75v.25a.75.75 0 0 1-1.5 0V16a.75.75 0 0 1 .75-.75m-1.75-5a1.75 1.75 0 1 1 2.431 1.613c-.616.26-1.431.885-1.431 1.887a.75.75 0 0 0 1.5 0c0-.053.02-.128.108-.228.092-.104.236-.205.408-.278A3.25 3.25 0 1 0 8.75 10.25a.75.75 0 0 0 1.5 0"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
