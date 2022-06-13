import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const EditIcon = ({ size, color, className }: IconProps) => {
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
        d="M8.317 19.978a2 2 0 0 1-1.091.56l-3.064.5a1 1 0 0 1-1.149-1.148l.502-3.064a2 2 0 0 1 .56-1.09l12.149-12.15a2 2 0 0 1 2.828 0L20.467 5a2 2 0 0 1 0 2.828l-12.15 12.15Zm9.675-14.624a.5.5 0 0 0-.707 0l-1.061 1.06 1.414 1.414 1.06-1.06a.5.5 0 0 0 0-.707l-.706-.707Zm-1.768 3.889L14.81 7.828l-6.364 6.364 1.414 1.415 6.364-6.364ZM8.446 17.02l-1.543 1.543-1.691.276.277-1.69 1.542-1.543 1.415 1.414Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
