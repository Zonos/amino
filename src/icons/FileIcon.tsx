import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FileIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.75 3A2.75 2.75 0 0 0 5 5.75v12.5A2.75 2.75 0 0 0 7.75 21h8.5A2.75 2.75 0 0 0 19 18.25V9.59a1 1 0 0 0-.229-.637l-4.618-5.59a1 1 0 0 0-.77-.363zM6.5 5.75c0-.69.56-1.25 1.25-1.25h5v4c0 .966.784 1.75 1.75 1.75h3v8c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zm10.158 3L14.25 5.836V8.5c0 .138.112.25.25.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
