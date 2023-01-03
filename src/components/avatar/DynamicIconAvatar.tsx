import { DynamicIcon, DynamicIconType } from 'src/icons/icon-base/DynamicIcon';

import { AvatarBase, AvatarProps, iconSizes } from './AvatarBase';

export type DynamicIconAvatarProps = {
  icon: DynamicIconType;
} & AvatarProps;

export const DynamicIconAvatar = ({
  icon,
  shape,
  size,
}: DynamicIconAvatarProps) => (
  <AvatarBase shape={shape} size={size}>
    <DynamicIcon type={icon} size={iconSizes[size]} />
  </AvatarBase>
);
