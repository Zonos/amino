import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  UserAvatar as Avatar,
  UserAvatarProps,
} from 'src/components/avatar/UserAvatar';
import { withDesign } from 'storybook-addon-designs';

const UserAvatarMeta: Meta = {
  title: 'Amino/Avatar/User Avatar',
  component: Avatar,
  decorators: [withDesign],
};

export default UserAvatarMeta;

const UserAvatarTemplate: Story<UserAvatarProps> = ({
  shape,
  size,
}: UserAvatarProps) => <Avatar shape={shape} size={size} />;

export const UserAvatar = UserAvatarTemplate.bind({});
UserAvatar.args = {
  shape: 'round',
  size: 'lg',
};
