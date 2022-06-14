import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ShoppingListSolidIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.107 3.797c-.096-.348-.144-.523-.207-.603a.428.428 0 0 0-.215-.156c-.096-.036-.227-.03-.49-.02-.693.03-1.163.108-1.557.309a3 3 0 0 0-1.311 1.311C4 5.28 4 6.12 4 7.8v9.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311c-.394-.201-.864-.278-1.557-.308-.263-.012-.394-.017-.49.019a.428.428 0 0 0-.215.156c-.063.08-.111.255-.207.603A3.001 3.001 0 0 1 13 6h-2a3.001 3.001 0 0 1-2.893-2.203ZM13 9a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-1 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-3-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
