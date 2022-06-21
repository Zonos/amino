import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const FolderUploadSolidIcon = ({
  size,
  color,
  className,
}: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M19.707 15.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414l.293-.293V22a1 1 0 1 0 2 0v-3.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2Z"
        fill="currentColor"
      />
      <path
        d="M9.758 4c.407 0 .766 0 1.114.083a3 3 0 0 1 .867.36c.306.186.559.44.846.728l.83.829h4.424c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356V12.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C21.62 13 21.48 13 21.2 13H19a6 6 0 0 0-6 6v.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C12.62 20 12.48 20 12.2 20H6.161c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A17.9 17.9 0 0 1 2 15.839V8.16c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C5.18 4 5.635 4 6.161 4h3.597Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
