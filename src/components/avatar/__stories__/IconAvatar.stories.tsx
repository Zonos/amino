import { Meta, Story } from '@storybook/react/types-6-0';
import {
  IconAvatar as Avatar,
  IconAvatarProps,
} from 'src/components/avatar/IconAvatar';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';

const IconAvatarMeta: Meta = {
  component: Avatar,
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

export default IconAvatarMeta;

const IconAvatarTemplate: Story<IconAvatarProps> = ({
  shape,
  size,
  icon,
}: IconAvatarProps) => <Avatar shape={shape} size={size} icon={icon} />;

export const IconAvatar = IconAvatarTemplate.bind({});
IconAvatar.args = {
  shape: 'round',
  size: 'lg',
  icon: <ArrowDownIcon />,
};
