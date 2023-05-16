import type { Meta, StoryFn } from '@storybook/react';
import { List } from 'src/components/list/List';
import { type Props, ListItem } from 'src/components/list-item/ListItem';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';

const ListItemMeta: Meta = {
  component: ListItem,
};

export default ListItemMeta;

const Template: StoryFn<Props> = ({
  label,
  disabled,
  subtitle,
  onClick,
  selected,
  rightDecorator,
  decorator,
}: Props) => (
  <List>
    <ListItem
      label={label}
      disabled={disabled}
      subtitle={subtitle}
      selected={selected}
      rightDecorator={rightDecorator}
      onClick={onClick}
      decorator={decorator}
    />
  </List>
);

export const BasicListItem = Template.bind({});
BasicListItem.args = {
  disabled: false,
  label: 'Example ListItem',
  subtitle: 'subtitle example',
  onClick: () => {},
  selected: true,
  decorator: <ArrowDownIcon />,
};
