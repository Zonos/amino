import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import {
  type MenuButtonProps,
  MenuButton,
} from '~/src/components/Button/MenuButton';

const MenuButtonMeta: Meta = {
  title: 'Amino/MenuButton',
  component: MenuButton,
  decorators: [withDesign],
};

export default MenuButtonMeta;

const Template: Story<MenuButtonProps> = ({
  label,
  children,
}: MenuButtonProps) => <MenuButton label={label}>{children}</MenuButton>;

export const Default = Template.bind({});
Default.args = {
  label: 'Example menu button',
  children: 'Menu contents',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A89',
  },
};
