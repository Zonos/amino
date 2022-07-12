import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ReceiptIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3h16v15.492c0 2.056-2.345 3.233-3.994 2.005l-.704-.525a.5.5 0 0 0-.599 0l-.303.228a4 4 0 0 1-4.8 0l-.303-.227a.5.5 0 0 0-.599-.001l-.704.525C6.344 21.725 4 20.548 4 18.492V3Zm2 2v13.492a.5.5 0 0 0 .799.4l.704-.524a2.5 2.5 0 0 1 2.994.005l.303.227a2 2 0 0 0 2.4 0l.303-.227a2.5 2.5 0 0 1 2.994-.005l.704.525a.5.5 0 0 0 .799-.401V5H6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 8a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H9Zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-7 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
          fill="currentColor"
        />
        <path
          d="M3 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
