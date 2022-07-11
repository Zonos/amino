import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LockSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.682 8h8.636c.593 0 1.105 0 1.526.033.445.035.887.112 1.313.32a3.298 3.298 0 0 1 1.475 1.411c.217.408.297.831.334 1.257.034.403.034.893.034 1.46v5.037c0 .568 0 1.058-.034 1.461-.037.426-.117.85-.334 1.257a3.306 3.306 0 0 1-1.475 1.412c-.425.207-.868.284-1.313.32-.421.032-.933.032-1.526.032H7.682c-.593 0-1.105 0-1.526-.033-.445-.035-.888-.111-1.313-.32a3.307 3.307 0 0 1-1.475-1.411c-.217-.408-.297-.831-.334-1.257C3 18.576 3 18.086 3 17.52v-5.037c0-.568 0-1.058.034-1.461.037-.426.117-.85.334-1.257a3.306 3.306 0 0 1 1.475-1.412c.425-.207.868-.284 1.313-.32A21.04 21.04 0 0 1 7.682 8ZM12 14.461c-.621 0-1.125.483-1.125 1.078v1.076c0 .595.504 1.077 1.125 1.077s1.125-.482 1.125-1.077V15.54c0-.595-.504-1.078-1.125-1.078Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 6a4 4 0 1 1 8 0v3h-2V6a2 2 0 1 0-4 0v3H8V6Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
