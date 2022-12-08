import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { IconAvatar } from 'src/components/avatar/IconAvatar';
import { List, ListProps } from 'src/components/list/List';
import { ListItem } from 'src/components/list-item/ListItem';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { ArrowLeftIcon } from 'src/icons/ArrowLeftIcon';
import { ArrowUpIcon } from 'src/icons/ArrowUpIcon';

const ListMeta: Meta = {
  component: List,
};

export default ListMeta;

const PrimaryListTemplate: Story<ListProps> = ({
  withBorder,
  withNegativeMargin,
}: ListProps) => {
  const [selectedListItem, setSelectedListItem] = useState(1);

  const updateSelectedListItem = (num: number) => {
    setSelectedListItem(selectedListItem === num ? 0 : num);
  };
  return (
    <List withBorder={withBorder} withNegativeMargin={withNegativeMargin}>
      <ListItem
        label="Label"
        disabled={false}
        subtitle="subtitle"
        onClick={() => updateSelectedListItem(1)}
        selected={selectedListItem === 1}
      />
      <ListItem
        label="Label"
        disabled
        subtitle="subtitle"
        onClick={() => updateSelectedListItem(2)}
        selected={selectedListItem === 2}
      />
      <ListItem
        label="Label"
        subtitle="subtitle"
        onClick={() => updateSelectedListItem(3)}
        selected={selectedListItem === 3}
      />
    </List>
  );
};

export const PrimaryList = PrimaryListTemplate.bind({});
PrimaryListTemplate.args = {
  withBorder: true,
  withNegativeMargin: false,
};

export const OneItem = () => (
  <List>
    <ListItem label="Label" disabled={false} subtitle="subtitle" />
  </List>
);

export const ManyItems = () => {
  const [selectedListItem, setSelectedListItem] = useState(1);

  const updateSelectedListItem = (num: number) => {
    setSelectedListItem(selectedListItem === num ? 0 : num);
  };

  return (
    <List>
      <ListItem
        decorator={
          <IconAvatar shape="round" size="sm" icon={<ArrowDownIcon />} />
        }
        label="Label"
        disabled={false}
        subtitle="subtitle"
        selected={selectedListItem === 1}
        onClick={() => updateSelectedListItem(1)}
      />
      <ListItem
        decorator={
          <IconAvatar shape="round" size="sm" icon={<ArrowLeftIcon />} />
        }
        label="Label"
        disabled={false}
        selected={selectedListItem === 2}
        onClick={() => updateSelectedListItem(2)}
        subtitle="subtitle"
      />
      <ListItem
        decorator={
          <IconAvatar shape="round" size="sm" icon={<ArrowUpIcon />} />
        }
        label="Label"
        disabled={false}
        selected={selectedListItem === 3}
        onClick={() => updateSelectedListItem(3)}
        subtitle="subtitle"
      />
    </List>
  );
};
