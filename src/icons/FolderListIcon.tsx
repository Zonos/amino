import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FolderListIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.75 15a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5H15a.75.75 0 0 1 .75.75m-6.25.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zM15.75 11a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5H15a.75.75 0 0 1 .75.75m-6.25.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M3 7.75A2.75 2.75 0 0 1 5.75 5h4.664c.66 0 1.265.372 1.562.962l.416.824a.25.25 0 0 0 .223.137h5.635A2.75 2.75 0 0 1 21 9.673v6.577A2.75 2.75 0 0 1 18.25 19H5.75A2.75 2.75 0 0 1 3 16.25zM5.75 6.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V9.673c0-.69-.56-1.25-1.25-1.25h-5.635a1.75 1.75 0 0 1-1.562-.961l-.416-.825a.25.25 0 0 0-.223-.137z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
