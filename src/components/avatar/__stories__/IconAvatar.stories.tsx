import { Meta, Story } from '@storybook/react/types-6-0';
import {
  IconAvatar as Avatar,
  IconAvatarProps,
} from 'src/components/avatar/IconAvatar';

import * as icons from '../../../icons/IconIndex';
import { BaseWrapper } from './BaseWrapper.stories';

const IconAvatarMeta: Meta = {
  component: Avatar,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons),
    },
    shape: {
      table: {
        disable: true,
      },
    },
    bordered: {
      control: { type: 'boolean' },
    },
  },
};

export default IconAvatarMeta;

type Props = Omit<IconAvatarProps, 'icon'> & { icon: keyof typeof icons };

const IconAvatarTemplate: Story<Props> = ({ size, icon, bordered }) => {
  const Icon = icons[icon];
  return (
    <BaseWrapper>
      <Avatar shape="round" size={size} icon={<Icon />} bordered={bordered} />
      <Avatar shape="square" size={size} icon={<Icon />} bordered={bordered} />
      <Avatar shape="rounded" size={size} icon={<Icon />} bordered={bordered} />
    </BaseWrapper>
  );
};

export const IconAvatar = IconAvatarTemplate.bind({});
IconAvatar.args = {
  shape: 'round',
  icon: 'ArrowDownIcon',
};
