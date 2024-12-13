import type { Meta, StoryFn } from '@storybook/react';

import bigSvg from 'src/components/avatar/__stories__/resources/big.svg';
import magentoSvg from 'src/components/avatar/__stories__/resources/magento.svg';
import mivaSvg from 'src/components/avatar/__stories__/resources/miva.svg';
import shopifySvg from 'src/components/avatar/__stories__/resources/shopify.svg';
import volusionSvg from 'src/components/avatar/__stories__/resources/volusion.svg';
import woocommerceSvg from 'src/components/avatar/__stories__/resources/woocommerce.svg';
import {
  ImageAvatar as Avatar,
  type ImageAvatarProps,
} from 'src/components/avatar/ImageAvatar';
import { Flex } from 'src/components/flex/Flex';
import { HStack } from 'src/components/stack/HStack';

const ImageAvatarMeta: Meta = {
  argTypes: {
    // We are showing all shapes already
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
    <Flex alignItems="center" flexDirection="column" gap={24}>
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
    </Flex>
    {platformList.map(platform => (
      <Flex key={platform} alignItems="center" flexDirection="column" gap={24}>
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
      </Flex>
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
