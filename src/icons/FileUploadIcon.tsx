import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FileUploadIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.5 5.75c0-.69.56-1.25 1.25-1.25h5v4c0 .966.784 1.75 1.75 1.75h3V12a.75.75 0 0 0 1.5 0V9.59a1 1 0 0 0-.229-.637l-4.618-5.59a1 1 0 0 0-.77-.363H7.75A2.75 2.75 0 0 0 5 5.75v12.5A2.75 2.75 0 0 0 7.75 21h2.75a.75.75 0 0 0 0-1.5H7.75c-.69 0-1.25-.56-1.25-1.25zm10.158 3L14.25 5.836V8.5c0 .138.112.25.25.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M16 15a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 16 15"
        fill="currentColor"
      />
    </IconBase>
  ),
);
