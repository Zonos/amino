import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BoxesIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.25 4A1.75 1.75 0 0 0 6.5 5.75V10q0 .262.072.5H5.75A1.75 1.75 0 0 0 4 12.25v6c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 18.25v-6a1.75 1.75 0 0 0-1.75-1.75h-.823q.072-.238.073-.5V5.75A1.75 1.75 0 0 0 15.75 4zM8 5.75a.25.25 0 0 1 .25-.25h3v1.25a.75.75 0 0 0 1.5 0V5.5h3a.25.25 0 0 1 .25.25V10a.25.25 0 0 1-.25.25h-7.5A.25.25 0 0 1 8 10zm-2.5 6.5a.25.25 0 0 1 .25-.25h5.5v2.25a.75.75 0 0 0 1.5 0V12h5.5a.25.25 0 0 1 .25.25v6a.25.25 0 0 1-.25.25H5.75a.25.25 0 0 1-.25-.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
