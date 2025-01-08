import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FolderUploadIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.75 6.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25H12a.75.75 0 0 1 0 1.5H5.75A2.75 2.75 0 0 1 3 16.25v-8.5A2.75 2.75 0 0 1 5.75 5h4.664c.66 0 1.265.372 1.562.962l.416.824a.25.25 0 0 0 .223.137h5.635A2.75 2.75 0 0 1 21 9.673v.885a.75.75 0 0 1-1.5 0v-.885c0-.69-.56-1.25-1.25-1.25h-5.635a1.75 1.75 0 0 1-1.562-.961l-.416-.825a.25.25 0 0 0-.223-.137z"
        fill="currentColor"
      />
      <path
        d="M18 13a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 18 13"
        fill="currentColor"
      />
    </IconBase>
  ),
);
