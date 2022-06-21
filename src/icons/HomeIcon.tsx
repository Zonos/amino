import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HomeIcon = ({ size, color, className }: IconProps) => {
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
        d="M12.37 5.104a.705.705 0 0 0-.74 0L5.37 8.916a.788.788 0 0 0-.37.675v8.63a.76.76 0 0 0 .74.779h12.52a.76.76 0 0 0 .74-.78V9.59a.788.788 0 0 0-.37-.674l-6.26-3.812Zm1.04-1.708a2.705 2.705 0 0 0-2.82 0L4.33 7.208A2.788 2.788 0 0 0 3 9.59v8.63C3 19.756 4.226 21 5.74 21h12.52c1.514 0 2.74-1.244 2.74-2.78V9.59c0-.975-.505-1.88-1.33-2.382l-6.26-3.812Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15a1 1 0 0 0-1 1v3H9v-3a3 3 0 1 1 6 0v3h-2v-3a1 1 0 0 0-1-1Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
