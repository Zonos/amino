import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LockDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6a4 4 0 1 1 8 0v3h-2V6a2 2 0 1 0-4 0v3H8V6Z"
        fill="currentColor"
      />
      <path
        d="M16.318 8H7.682c-.593 0-1.105 0-1.526.033-.445.035-.888.112-1.313.32a3.306 3.306 0 0 0-1.475 1.411c-.217.408-.297.831-.334 1.257C3 11.424 3 11.914 3 12.48v5.037c0 .568 0 1.058.034 1.461.037.426.117.85.334 1.257.323.608.84 1.102 1.475 1.412.425.207.868.284 1.313.32.421.032.933.032 1.526.032h8.636c.593 0 1.105 0 1.526-.033.445-.035.887-.111 1.313-.32a3.306 3.306 0 0 0 1.475-1.411c.217-.408.297-.831.334-1.257.034-.403.034-.893.034-1.46v-5.037c0-.568 0-1.058-.034-1.461-.037-.426-.117-.85-.334-1.257a3.306 3.306 0 0 0-1.475-1.412c-.425-.207-.868-.284-1.313-.32A21.04 21.04 0 0 0 16.318 8Z"
        fill={secondaryColor || '#CACACE'}
        data-is-secondary-color="true"
      />
      <path d="M11 16a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Z" fill="currentColor" />
    </IconBase>
  );
};
