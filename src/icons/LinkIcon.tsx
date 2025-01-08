import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LinkIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.595 6.35a4.993 4.993 0 0 1 7.06 7.06l-.543.543a.75.75 0 0 1-1.06-1.06l.543-.543a3.493 3.493 0 1 0-4.94-4.94l-.543.543a.75.75 0 0 1-1.06-1.06zm-2.647 3.707a.75.75 0 0 1 0 1.06l-.543.544a3.493 3.493 0 0 0 4.94 4.939l.542-.543a.75.75 0 0 1 1.061 1.06l-.543.544a4.993 4.993 0 1 1-7.06-7.061l.543-.543a.75.75 0 0 1 1.06 0"
        fill="currentColor"
      />
      <path
        d="M14.784 10.282a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 1 0 1.06 1.06z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
