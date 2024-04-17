import type { Meta, StoryFn } from '@storybook/react';

import { List } from 'src/components/list/List';
import { ListItem, type Props } from 'src/components/list-item/ListItem';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';

const ListItemMeta: Meta = {
  component: ListItem,
};

export default ListItemMeta;

const Template: StoryFn<Props> = ({
  decorator,
  disabled,
  label,
  onClick,
  rightDecorator,
  selected,
  subtitle,
}: Props) => (
  <List>
    <ListItem
      decorator={decorator}
      disabled={disabled}
      label={label}
      onClick={onClick}
      rightDecorator={rightDecorator}
      selected={selected}
      subtitle={subtitle}
    />
  </List>
);

export const BasicListItem = Template.bind({});
BasicListItem.args = {
  decorator: <ArrowDownIcon />,
  disabled: false,
  label: 'Example ListItem',
  onClick: () => {},
  selected: true,
  subtitle: 'subtitle example',
};
