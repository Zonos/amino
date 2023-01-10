import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FileUploadWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.053 2.817A3 3 0 0 1 10.11 2H17a3 3 0 0 1 3 3v6a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-4.7v2.885a3 3 0 0 1-3 3H6V19a1 1 0 0 0 1 1h8a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3V7.93a3 3 0 0 1 .943-2.183l3.11-2.93ZM6.001 7.885H9.3a1 1 0 0 0 1-1V4h-.19a1 1 0 0 0-.685.272l-3.11 2.931A1 1 0 0 0 6 7.885Zm11.938 6.761a1.5 1.5 0 0 1 2.122 0l1.646 1.647a1 1 0 0 1-1.414 1.414L20 17.414V21a1 1 0 1 1-2 0v-3.586l-.293.293a1 1 0 0 1-1.414-1.414l1.646-1.647Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
