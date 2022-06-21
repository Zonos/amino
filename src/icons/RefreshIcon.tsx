import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const RefreshIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M20.98 12.784c.552.048 1.043-.36 1.036-.914A10 10 0 0 0 5.43 4.476v-.724a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-.402a7.995 7.995 0 0 1 12.979 5.943c.021.553.422 1.04.974 1.089ZM3.016 11.221c-.551-.048-1.043.36-1.035.914A10 10 0 0 0 18.482 19.6v.627a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h.516A7.994 7.994 0 0 1 3.99 12.31c-.021-.553-.422-1.04-.974-1.088Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
