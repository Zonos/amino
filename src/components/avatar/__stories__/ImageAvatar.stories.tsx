import type { Meta, StoryFn } from '@storybook/react';
import bigSvg from 'src/components/avatar/__stories__/resources/big.svg';
import magentoSvg from 'src/components/avatar/__stories__/resources/magento.svg';
import mivaSvg from 'src/components/avatar/__stories__/resources/miva.svg';
import shopifySvg from 'src/components/avatar/__stories__/resources/shopify.svg';
import volusionSvg from 'src/components/avatar/__stories__/resources/volusion.svg';
import woocommerceSvg from 'src/components/avatar/__stories__/resources/woocommerce.svg';
import {
  type ImageAvatarProps,
  ImageAvatar as Avatar,
} from 'src/components/avatar/ImageAvatar';
import { HStack } from 'src/components/stack/HStack';

import { BaseWrapper } from './BaseWrapper';

const ImageAvatarMeta: Meta = {
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
  component: Avatar,
};

export default ImageAvatarMeta;

const platformList = [
  bigSvg,
  magentoSvg,
  mivaSvg,
  shopifySvg,
  volusionSvg,
  woocommerceSvg,
];

const ImageAvatarTemplate: StoryFn<ImageAvatarProps> = ({
  bordered,
  imageUrl,
  size,
}: ImageAvatarProps) => (
  <HStack>
    <BaseWrapper>
      <Avatar
        bordered={bordered}
        imageUrl={imageUrl}
        shape="round"
        size={size}
      />
      <Avatar
        bordered={bordered}
        imageUrl={imageUrl}
        shape="rounded"
        size={size}
      />
      <Avatar
        bordered={bordered}
        imageUrl={imageUrl}
        shape="square"
        size={size}
      />
    </BaseWrapper>
    {platformList.map(platform => (
      <BaseWrapper>
        <Avatar
          bordered={bordered}
          imageUrl={`${platform}`}
          shape="round"
          size={size}
        />
        <Avatar
          bordered={bordered}
          imageUrl={`${platform}`}
          shape="rounded"
          size={size}
        />
        <Avatar
          bordered={bordered}
          imageUrl={`${platform}`}
          shape="square"
          size={size}
        />
      </BaseWrapper>
    ))}
  </HStack>
);

export const ImageAvatar = ImageAvatarTemplate.bind({});
ImageAvatar.args = {
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/2/23/Mountain_Goat%2C_Enchantments_Basin.jpg',
  shape: 'round',
  size: 56,
};
