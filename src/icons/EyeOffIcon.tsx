import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const EyeOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.97 5.97c-2.054 1.546-3.185 3.614-3.7 4.77a3.087 3.087 0 0 0 0 2.52C3.14 15.213 5.892 20 12 20c2.542 0 4.526-.84 6.03-1.97l-1.432-1.432C15.435 17.41 13.935 18 12 18c-4.855 0-7.11-3.773-7.903-5.553a1.087 1.087 0 0 1 0-.893c.46-1.035 1.458-2.822 3.212-4.085a1.01 1.01 0 0 0 .088-.072L5.971 5.971Z"
          fill="currentColor"
        />
        <path
          d="M9.172 9.172a4 4 0 1 0 5.657 5.657l-1.415-1.415a2 2 0 1 1-2.828-2.828L9.172 9.172ZM12 4c6.11 0 8.861 4.788 9.73 6.74a3.088 3.088 0 0 1 0 2.52c-.155.35-.364.775-.634 1.24a1 1 0 0 1-1.73-1c.229-.398.406-.76.537-1.053a1.088 1.088 0 0 0 0-.893C19.11 9.772 16.856 6 12 6h-1a1 1 0 1 1 0-2h1Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
