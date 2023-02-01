import { Meta, Story } from '@storybook/react/types-6-0';
import bigSvg from 'src/components/avatar/__stories__/resources/big.svg';
import magentoSvg from 'src/components/avatar/__stories__/resources/magento.svg';
import mivaSvg from 'src/components/avatar/__stories__/resources/miva.svg';
import shopifySvg from 'src/components/avatar/__stories__/resources/shopify.svg';
import volusionSvg from 'src/components/avatar/__stories__/resources/volusion.svg';
import woocommerceSvg from 'src/components/avatar/__stories__/resources/woocommerce.svg';
import {
  ImageAvatar as Avatar,
  ImageAvatarProps,
} from 'src/components/avatar/ImageAvatar';
import { HStack } from 'src/components/stack/HStack';

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

const platformList = [
  bigSvg,
  magentoSvg,
  mivaSvg,
  shopifySvg,
  volusionSvg,
  woocommerceSvg,
];

const ImageAvatarTemplate: Story<ImageAvatarProps> = ({
  size,
  imageUrl,
  bordered,
}: ImageAvatarProps) => (
  <HStack>
    <BaseWrapper>
      <Avatar
        shape="round"
        size={size}
        bordered={bordered}
        imageUrl={imageUrl}
      />
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
    {platformList.map(platform => (
      <BaseWrapper>
        <Avatar
          shape="round"
          size={size}
          bordered={bordered}
          imageUrl={`${platform}`}
        />
        <Avatar
          shape="rounded"
          size={size}
          bordered={bordered}
          imageUrl={`${platform}`}
        />
        <Avatar
          shape="square"
          size={size}
          bordered={bordered}
          imageUrl={`${platform}`}
        />
      </BaseWrapper>
    ))}
  </HStack>
);

export const ImageAvatar = ImageAvatarTemplate.bind({});
ImageAvatar.args = {
  shape: 'round',
  size: 56,
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/2/23/Mountain_Goat%2C_Enchantments_Basin.jpg',
};
