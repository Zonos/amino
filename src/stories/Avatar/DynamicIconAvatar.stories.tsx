import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  DynamicIconAvatar as Avatar,
  DynamicIconAvatarProps,
} from 'src/components/avatar/DynamicIconAvatar';
import { withDesign } from 'storybook-addon-designs';

const DynamicIconAvatarMeta: Meta = {
  title: 'Amino/Avatar/Dynamic Icon Avatar',
  component: Avatar,
  decorators: [withDesign],
};

export default DynamicIconAvatarMeta;

const DynamicIconAvatarTemplate: Story<DynamicIconAvatarProps> = ({
  shape,
  size,
  icon,
}: DynamicIconAvatarProps) => <Avatar shape={shape} size={size} icon={icon} />;

export const DynamicIconAvatar = DynamicIconAvatarTemplate.bind({});
DynamicIconAvatar.args = {
  shape: 'round',
  size: 'lg',
  icon: 'ArrowDownIcon',
};
