import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FolderListSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.872 4.082c-.348-.084-.707-.083-1.114-.083H6.16c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.379-.264.772-.296 1.167C2 7.18 2 7.634 2 8.16v7.678c0 .527 0 .982.03 1.356.033.396.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.297.375.03.83.03 1.356.03H17.84c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.31c.193-.38.264-.772.296-1.168.031-.374.031-.83.031-1.356V10.16c0-.528 0-.982-.03-1.357-.033-.395-.104-.788-.297-1.167a3 3 0 0 0-1.311-1.31c-.378-.194-.772-.265-1.167-.297A17.9 17.9 0 0 0 17.839 6h-4.425l-.829-.83c-.287-.288-.54-.542-.846-.729a3 3 0 0 0-.867-.359ZM12 11a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2Zm-3-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
