import { Meta, Story } from '@storybook/react/types-6-0';
import {
  UserAvatar as Avatar,
  UserAvatarProps,
} from 'src/components/avatar/UserAvatar';

import { BaseWrapper } from './BaseWrapper.stories';

const UserAvatarMeta: Meta = {
  component: Avatar,
  argTypes: {
    bordered: {
      control: { type: 'boolean' },
    },
  },
};

export default UserAvatarMeta;

const UserAvatarTemplate: Story<UserAvatarProps> = ({
  size,
  bordered,
}: UserAvatarProps) => (
  <BaseWrapper>
    <Avatar shape="round" size={size} bordered={bordered} />
    <Avatar shape="rounded" size={size} bordered={bordered} />
    <Avatar shape="square" size={size} bordered={bordered} />
  </BaseWrapper>
);

export const UserAvatar = UserAvatarTemplate.bind({});
