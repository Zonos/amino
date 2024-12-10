import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { List, type ListProps } from 'src/components/list/List';
import { ListItem } from 'src/components/list-item/ListItem';
import { Thumbnail } from 'src/components/thumbnail/Thumbnail';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { ArrowLeftIcon } from 'src/icons/ArrowLeftIcon';
import { ArrowUpIcon } from 'src/icons/ArrowUpIcon';

const ListMeta: Meta = {
  component: List,
};

export default ListMeta;

const PrimaryListTemplate: StoryFn<ListProps> = ({
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
        disabled={false}
        label="Label"
        onClick={() => updateSelectedListItem(1)}
        selected={selectedListItem === 1}
        subtitle="subtitle"
      />
      <ListItem
        disabled
        label="Label"
        onClick={() => updateSelectedListItem(2)}
        selected={selectedListItem === 2}
        subtitle="subtitle"
      />
      <ListItem
        label="Label"
        onClick={() => updateSelectedListItem(3)}
        selected={selectedListItem === 3}
        subtitle="subtitle"
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
    <ListItem disabled={false} label="Label" subtitle="subtitle" />
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
          <Thumbnail icon={<ArrowDownIcon />} shape="round" size={16} />
        }
        disabled={false}
        label="Label"
        onClick={() => updateSelectedListItem(1)}
        selected={selectedListItem === 1}
        subtitle="subtitle"
      />
      <ListItem
        decorator={
          <Thumbnail icon={<ArrowLeftIcon />} shape="round" size={16} />
        }
        disabled={false}
        label="Label"
        onClick={() => updateSelectedListItem(2)}
        selected={selectedListItem === 2}
        subtitle="subtitle"
      />
      <ListItem
        decorator={<Thumbnail icon={<ArrowUpIcon />} shape="round" size={16} />}
        disabled={false}
        label="Label"
        onClick={() => updateSelectedListItem(3)}
        selected={selectedListItem === 3}
        subtitle="subtitle"
      />
    </List>
  );
};
