import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const FileUploadIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.8 4H13v2a3 3 0 0 0 3 3h2v3a1 1 0 1 0 2 0V8.886c0-.635 0-1.114-.11-1.577a4 4 0 0 0-.48-1.156c-.248-.406-.587-.745-1.037-1.194l-1.332-1.332c-.449-.45-.788-.789-1.194-1.038a4 4 0 0 0-1.156-.478C14.228 1.999 13.75 2 13.114 2H9.759c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C4 6.29 4 6.954 4 7.758v8.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C8.29 22 8.954 22 9.758 22H14a1 1 0 1 0 0-2H9.8c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 0 1-.874-.874c-.08-.156-.145-.38-.18-.819C6 17.639 6 17.057 6 16.2V7.8c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 0 1 .874-.874c.156-.08.38-.145.819-.18C8.361 4 8.943 4 9.8 4Zm7.087 2.301c.36.361.553.557.673.699H16a1 1 0 0 1-1-1V4.44c.142.12.338.312.699.673l1.188 1.188Z"
          fill="currentColor"
        />
        <path
          d="M18.293 15.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L20 18.414V22a1 1 0 1 1-2 0v-3.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
