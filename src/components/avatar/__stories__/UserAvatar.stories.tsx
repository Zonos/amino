import type { Meta, StoryFn } from '@storybook/react';
import {
  type UserAvatarProps,
  UserAvatar as Avatar,
} from 'src/components/avatar/UserAvatar';

import { BaseWrapper } from './BaseWrapper';

const UserAvatarMeta: Meta = {
  component: Avatar,
  argTypes: {
    bordered: {
      control: { type: 'boolean' },
    },
  },
};

export default UserAvatarMeta;

const UserAvatarTemplate: StoryFn<UserAvatarProps> = ({
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
