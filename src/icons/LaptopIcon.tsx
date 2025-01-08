import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LaptopIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.75 5A2.75 2.75 0 0 0 4 7.75V13a1 1 0 0 0-1 1v2.25A2.75 2.75 0 0 0 5.75 19h12.5A2.75 2.75 0 0 0 21 16.25V14a1 1 0 0 0-1-1V7.75A2.75 2.75 0 0 0 17.25 5zm12.75 9.5h-4.47c-.304 0-.597.11-.825.311l-.39.342a2.75 2.75 0 0 1-3.63 0l-.39-.342a1.25 1.25 0 0 0-.825-.311H4.5v1.75c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25zM5.5 13h3.47a2.75 2.75 0 0 1 1.816.684l.389.342a1.25 1.25 0 0 0 1.65 0l.39-.342A2.75 2.75 0 0 1 15.03 13h3.47V7.75c0-.69-.56-1.25-1.25-1.25H6.75c-.69 0-1.25.56-1.25 1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
