import { Meta, Story } from '@storybook/react/types-6-0';
import {
  DynamicIconAvatar as Avatar,
  DynamicIconAvatarProps,
} from 'src/components/avatar/DynamicIconAvatar';

const DynamicIconAvatarMeta: Meta = {
  component: Avatar,
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
