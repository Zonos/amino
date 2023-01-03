import { cloneElement, ReactElement } from 'react';

import { AvatarBase, AvatarProps, iconSizes } from './AvatarBase';

export type IconAvatarProps = {
  icon: ReactElement;
} & AvatarProps;

export const IconAvatar = ({ icon, shape, size }: IconAvatarProps) => {
  const iconWithCorrectSize = icon.props.size
    ? icon
    : cloneElement(icon, { size: iconSizes[size] });

  return (
    <AvatarBase shape={shape} size={size}>
      {iconWithCorrectSize}
    </AvatarBase>
  );
};
