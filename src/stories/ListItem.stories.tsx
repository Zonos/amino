import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { ListItem, Props } from 'components/ListItem/ListItem';

const ListItemMeta: Meta = {
  title: 'Amino/ListItem',
  component: ListItem,
  decorators: [withDesign],
};

export default ListItemMeta;

const Template: Story<Props> = ({
  label,
  disabled,
  subtitle,
  onClick,
  icon,
  rightDecorator,
  iconComponent,
}: Props) => (
  <ListItem
    label={label}
    disabled={disabled}
    subtitle={subtitle}
    icon={icon}
    rightDecorator={rightDecorator}
    iconComponent={iconComponent}
    onClick={onClick}
  />
);

export const BasicListItem = Template.bind({});
BasicListItem.args = {
  disabled: true,
  label: 'Example ListItem',
  subtitle: 'subtitle example',
  icon: '',
};
