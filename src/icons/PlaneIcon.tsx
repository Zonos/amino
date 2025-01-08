import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PlaneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.142 6.311A.75.75 0 0 1 9.75 6h.722a2.75 2.75 0 0 1 1.887.75L14.565 9h2.685A2.75 2.75 0 0 1 20 11.75v1.5a.75.75 0 0 1-.75.75h-4.731l-4.098 3.373A2.75 2.75 0 0 1 8.673 18H6.75a.75.75 0 0 1-.6-1.2l2.1-2.8h-.5A3.75 3.75 0 0 1 4 10.25v-2.5a.75.75 0 0 1 1.248-.56L7.285 9H9.71l-.67-2.013a.75.75 0 0 1 .103-.676ZM11.29 9h1.173l-1.16-1.183a1.25 1.25 0 0 0-.498-.272zm-1.166 5L8.25 16.5h.423c.29 0 .571-.1.795-.285L12.158 14zM5.5 9.42v.83a2.25 2.25 0 0 0 2.25 2.25H18.5v-.75c0-.69-.56-1.25-1.25-1.25H7a.75.75 0 0 1-.498-.19z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
