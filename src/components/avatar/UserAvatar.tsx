import React from 'react';

import avatarimg from '../../../svgReact/icons/svgs/Avatar.svg';
import { AvatarBase, AvatarProps } from './AvatarBase';

export type UserAvatarProps = AvatarProps;

export const UserAvatar = ({ size, shape }: AvatarProps) => (
  <AvatarBase
    shape={shape}
    size={size}
    backgroundUrl={`${avatarimg}`}
    backgroundSize="80%"
  />
);
