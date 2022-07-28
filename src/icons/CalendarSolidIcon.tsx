import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CalendarSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 4a1 1 0 1 0-2 0v1c-.459 0-.86.003-1.195.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167-.017.207-.025.44-.028.695-.004.276.221.5.497.5h17a.496.496 0 0 0 .497-.5 9.486 9.486 0 0 0-.028-.695c-.032-.395-.103-.789-.296-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A15.193 15.193 0 0 0 17 5V4a1 1 0 1 0-2 0v1H9V4Zm12 7.5a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5v5.339c0 .527 0 .982.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h9.678c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356V11.5Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
