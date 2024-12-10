import type { Meta, StoryFn } from '@storybook/react';

import {
  UserAvatar as Avatar,
  type UserAvatarProps,
} from 'src/components/avatar/UserAvatar';
import { Flex } from 'src/components/flex/Flex';

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
  <Flex alignItems="center" flexDirection="column" gap={24}>
    <Avatar bordered={bordered} shape="round" size={size} />
    <Avatar bordered={bordered} shape="rounded" size={size} />
    <Avatar bordered={bordered} shape="square" size={size} />
  </Flex>
);

export const UserAvatar = UserAvatarTemplate.bind({});
