import type { Meta, StoryFn } from '@storybook/react';

import { BaseWrapper } from 'src/components/avatar/__stories__/BaseWrapper';
import {
  type UserAvatarProps,
  UserAvatar as Avatar,
} from 'src/components/avatar/UserAvatar';

const UserAvatarMeta: Meta = {
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
