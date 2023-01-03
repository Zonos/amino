import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const FolderListDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#CACACE'}
      data-is-secondary-color="true"
      d="M10.872 4.083C10.524 3.999 10.165 4 9.758 4H6.16c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C2 7.18 2 7.635 2 8.16v7.678c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031H17.84c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.357V10.16c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A17.9 17.9 0 0 0 17.839 6h-4.425l-.829-.829c-.287-.288-.54-.542-.846-.729a3 3 0 0 0-.867-.36Z"
    />
    <path
      fill="currentColor"
      d="M10 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm0 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </IconBase>
));
