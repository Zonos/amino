import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  ImageAvatar as Avatar,
  ImageAvatarProps,
} from 'src/components/avatar/ImageAvatar';

const ImageAvatarMeta: Meta = {
  title: 'Amino/Avatar/Image Avatar',
  component: Avatar,
};

export default ImageAvatarMeta;

const ImageAvatarTemplate: Story<ImageAvatarProps> = ({
  shape,
  size,
  imageUrl,
}: ImageAvatarProps) => (
  <Avatar shape={shape} size={size} imageUrl={imageUrl} />
);

export const ImageAvatar = ImageAvatarTemplate.bind({});
ImageAvatar.args = {
  shape: 'round',
  size: 'lg',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/2/23/Mountain_Goat%2C_Enchantments_Basin.jpg',
};
