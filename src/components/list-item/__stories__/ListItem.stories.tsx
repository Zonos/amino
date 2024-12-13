import { useState } from 'react';

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
  rightDecorator,
  subtitle,
}: Props) => {
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <List>
      <ListItem
        decorator={decorator}
        disabled={disabled}
        label={label}
        onClick={() => {
          if (selected.includes(1)) {
            setSelected(selected.filter(item => item !== 1));
          } else {
            setSelected([...selected, 1]);
          }
        }}
        rightDecorator={rightDecorator}
        selected={selected.includes(1)}
        subtitle={subtitle}
      />
      <ListItem
        decorator={decorator}
        disabled={disabled}
        label={label}
        onClick={() => {
          if (selected.includes(2)) {
            setSelected(selected.filter(item => item !== 2));
          } else {
            setSelected([...selected, 2]);
          }
        }}
        rightDecorator={rightDecorator}
        selected={selected.includes(2)}
        subtitle={subtitle}
      />
    </List>
  );
};

export const BasicListItem = Template.bind({});
BasicListItem.args = {
  decorator: <ArrowDownIcon />,
  disabled: false,
  label: 'Example ListItem',
  selected: true,
  subtitle: 'subtitle example',
};
