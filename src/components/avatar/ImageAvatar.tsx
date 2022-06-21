import React from 'react';

import { AvatarBase, AvatarProps } from './AvatarBase';

export type ImageAvatarProps = {
  imageUrl: string;
} & AvatarProps;

export const ImageAvatar = ({ size, shape, imageUrl }: ImageAvatarProps) => (
  <AvatarBase
    shape={shape}
    size={size}
    backgroundUrl={imageUrl}
    backgroundSize="cover"
  />
);
