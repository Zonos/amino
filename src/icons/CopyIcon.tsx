import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CopyIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        className={className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 4.03V6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4.03l-.089.008c-.438.035-.662.1-.819.18a2 2 0 0 0-.874.874c-.08.157-.145.381-.18.819C6 6.353 6 6.924 6 7.759v8.482c0 .835.001 1.406.038 1.848.035.438.1.662.18.819a2 2 0 0 0 .874.874c.157.08.381.145.819.18C8.353 20 8.924 20 9.759 20h4.482c.835 0 1.406-.002 1.848-.038.438-.035.662-.1.819-.18l.908 1.782c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H9.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C4 17.71 4 17.046 4 16.242V7.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392A16.665 16.665 0 0 1 9 2h6a16.664 16.664 0 0 1 1.252.044c.562.046 1.079.145 1.564.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C20 6.29 20 6.954 20 7.758v8.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748l-.908-1.782a2 2 0 0 0 .874-.874c.08-.157.145-.381.18-.819.037-.442.038-1.013.038-1.848V7.76c0-.835-.002-1.406-.038-1.848-.035-.438-.1-.662-.18-.819a2 2 0 0 0-.874-.874c-.157-.08-.381-.145-.819-.18A7.146 7.146 0 0 0 16 4.03ZM10 4v2h4V4h-4Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
