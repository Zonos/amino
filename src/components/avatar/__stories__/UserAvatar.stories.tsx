import type { Meta, StoryFn } from '@storybook/react';
import {
  type UserAvatarProps,
  UserAvatar as Avatar,
} from 'src/components/avatar/UserAvatar';

import { BaseWrapper } from './BaseWrapper';

const UserAvatarMeta: Meta = {
  argTypes: {
    bordered: {
      control: { type: 'boolean' },
    },
  },
  component: Avatar,
};

export default UserAvatarMeta;

const UserAvatarTemplate: StoryFn<UserAvatarProps> = ({
  bordered,
  size,
}: UserAvatarProps) => (
  <BaseWrapper>
    <Avatar bordered={bordered} shape="round" size={size} />
    <Avatar bordered={bordered} shape="rounded" size={size} />
    <Avatar bordered={bordered} shape="square" size={size} />
  </BaseWrapper>
);

export const UserAvatar = UserAvatarTemplate.bind({});
