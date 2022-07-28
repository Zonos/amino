import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const FileIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.691 2.11C14.228 2 13.75 2 13.114 2H9.759c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C4 6.29 4 6.954 4 7.758v8.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C8.29 22 8.954 22 9.758 22h4.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V8.885c0-.635 0-1.114-.11-1.577a4 4 0 0 0-.48-1.156c-.248-.406-.587-.745-1.037-1.194l-1.332-1.332c-.449-.45-.788-.789-1.194-1.038a4 4 0 0 0-1.156-.478ZM13 4H9.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C6 6.361 6 6.943 6 7.8v8.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C8.361 20 8.943 20 9.8 20h4.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V9h-2a3 3 0 0 1-3-3V4Zm4.56 3a13.61 13.61 0 0 0-.673-.699l-1.188-1.188A13.61 13.61 0 0 0 15 4.44V6a1 1 0 0 0 1 1h1.56Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
