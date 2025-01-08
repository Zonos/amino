import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const GridIcon = forwardRef<SVGSVGElement, IconProps>(
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
        clipRule="evenodd"
        d="M14.75 4A1.75 1.75 0 0 0 13 5.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 20 9.25v-3.5A1.75 1.75 0 0 0 18.25 4zm-.25 1.75a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25zm.25 7.25A1.75 1.75 0 0 0 13 14.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 20 18.25v-3.5A1.75 1.75 0 0 0 18.25 13zm-.25 1.75a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25zm-10.5 0c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 9.25 20h-3.5A1.75 1.75 0 0 1 4 18.25zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25zm0-10.5A1.75 1.75 0 0 0 4 5.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 11 9.25v-3.5A1.75 1.75 0 0 0 9.25 4zM5.5 5.75a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
