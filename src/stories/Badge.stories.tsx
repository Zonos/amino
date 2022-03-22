import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { CubeIcon } from 'icons';

import { Badge, BadgeProps } from '../components/Badge';

const BadgeMeta: Meta = {
  title: 'Amino/Badge',
  component: Badge,
  decorators: [withDesign],
};

export default BadgeMeta;

const Template: Story<BadgeProps> = ({
  color,
  children,
  icon,
  iconRight,
  inverted,
  rounded,
  size,
}: BadgeProps) => (
  <Badge
    color={color}
    icon={icon}
    iconRight={iconRight}
    inverted={inverted}
    rounded={rounded}
    size={size}
  >
    {children}
  </Badge>
);

export const BasicBadge = Template.bind({});
BasicBadge.args = {
  icon: <CubeIcon size={20} />,
  children: <span>HS code for Brazil</span>,
};
BasicBadge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
