import React from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CopyDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
  const ids = useStableUniqueId(1);
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
        d="M14.2413 2H9.7587C8.95374 1.99999 8.28937 1.99998 7.74818 2.04419C7.18608 2.09012 6.66937 2.18868 6.18404 2.43598C5.43139 2.81947 4.81947 3.43139 4.43597 4.18404C4.18868 4.66937 4.09012 5.18608 4.0442 5.74818C3.99998 6.28937 3.99999 6.95372 4 7.75869V16.2413C3.99999 17.0463 3.99998 17.7106 4.0442 18.2518C4.09012 18.8139 4.18868 19.3306 4.43597 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C6.66937 21.8113 7.18608 21.9099 7.74818 21.9558C8.28936 22 8.95372 22 9.75868 22H14.2413C15.0463 22 15.7106 22 16.2518 21.9558C16.8139 21.9099 17.3306 21.8113 17.816 21.564C18.5686 21.1805 19.1805 20.5686 19.564 19.816C19.8113 19.3306 19.9099 18.8139 19.9558 18.2518C20 17.7106 20 17.0463 20 16.2413V7.75868C20 6.95373 20 6.28936 19.9558 5.74818C19.9099 5.18608 19.8113 4.66937 19.564 4.18404C19.1805 3.43139 18.5686 2.81947 17.816 2.43598C17.3306 2.18868 16.8139 2.09012 16.2518 2.04419C15.7106 1.99998 15.0463 1.99999 14.2413 2Z"
        fill="currentColor"
      />
      <mask id={`${ids[0]}`} fill="white">
        <path d="M8 4H16V6C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6V4Z" />
      </mask>
      <path
        d="M8 4H16V6C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6V4Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M8 4V3H7V4H8ZM16 4H17V3H16V4ZM8 5H16V3H8V5ZM15 4V6H17V4H15ZM14 7H10V9H14V7ZM9 6V4H7V6H9ZM10 7C9.44772 7 9 6.55228 9 6H7C7 7.65685 8.34315 9 10 9V7ZM15 6C15 6.55228 14.5523 7 14 7V9C15.6569 9 17 7.65685 17 6H15Z"
        fill={secondaryColor || '#3D3D42'}
        mask={`url(#${ids[0]})`}
      />
    </IconBase>
  );
};
