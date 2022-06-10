import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const DislikeSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <rect
        x="20"
        y="15"
        width="2"
        height="11"
        rx="1"
        transform="rotate(-180 20 15)"
        fill="currentColor"
      />
      <path
        d="M13.6203 19.5973C13.4277 19.8507 13.1242 20 12.8018 20H10.6491C10.0854 20 9.62846 19.5523 9.62846 19V16.6364C9.62846 16.0841 9.17149 15.6364 8.60779 15.6364H6.04165C4.81448 15.6364 3.86467 14.5831 4.01584 13.39L4.98336 5.75362C5.11026 4.75201 5.97899 4 7.00916 4H14.9586C16.0861 4 17 4.89543 17 6V13.6927C17 14.0176 16.9596 14.3412 16.8797 14.6565L16.8292 14.8558C16.6987 15.371 16.4647 15.8556 16.1411 16.2813L13.6203 19.5973Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
