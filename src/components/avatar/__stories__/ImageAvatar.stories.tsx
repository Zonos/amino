import { Meta, Story } from '@storybook/react/types-6-0';
import {
  ImageAvatar as Avatar,
  ImageAvatarProps,
} from 'src/components/avatar/ImageAvatar';

import { BaseWrapper } from './BaseWrapper.stories';

const ImageAvatarMeta: Meta = {
  component: Avatar,
  argTypes: {
    bordered: {
      control: { type: 'boolean' },
    },
    shape: {
      table: {
        disable: true,
      },
    },
  },
};

export default ImageAvatarMeta;

const ImageAvatarTemplate: Story<ImageAvatarProps> = ({
  size,
  imageUrl,
  bordered,
}: ImageAvatarProps) => (
  <BaseWrapper>
    <Avatar shape="round" size={size} bordered={bordered} imageUrl={imageUrl} />
    <Avatar
      shape="rounded"
      size={size}
      bordered={bordered}
      imageUrl={imageUrl}
    />
    <Avatar
      shape="square"
      size={size}
      bordered={bordered}
      imageUrl={imageUrl}
    />
  </BaseWrapper>
);

export const ImageAvatar = ImageAvatarTemplate.bind({});
ImageAvatar.args = {
  shape: 'round',
  size: 56,
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/2/23/Mountain_Goat%2C_Enchantments_Basin.jpg',
};
