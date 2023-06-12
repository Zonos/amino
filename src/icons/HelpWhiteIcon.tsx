import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelpWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10.25-3a.734.734 0 0 0-.697.502l-.104.314a1 1 0 0 1-1.898-.632l.105-.314a2.734 2.734 0 0 1 5.188 0l.023.069c.088.264.133.54.133.82v.21a2.32 2.32 0 0 1-1.758 2.251.32.32 0 0 0-.242.31V13a1 1 0 1 1-2 0v-.47a2.32 2.32 0 0 1 1.758-2.25.32.32 0 0 0 .242-.31v-.212a.59.59 0 0 0-.03-.187l-.023-.069A.734.734 0 0 0 12.25 9ZM12 15a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V16a1 1 0 0 1 1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
