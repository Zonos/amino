import React, { useEffect, useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { UserAvatar } from 'src/components/avatar/UserAvatar';
import { ListItem } from 'src/components/list-item/ListItem';
import { SortableList } from 'src/components/sortable-list/SortableList';
import {
  arrayMove,
  DragEndEvent,
} from 'src/components/sortable-list/SortableListDeps';
import { SortableListItem } from 'src/components/sortable-list/SortableListItem';

const SortableListMeta: Meta = {
  component: SortableList,
};

export default SortableListMeta;

interface IListItemData {
  id: string;
  name: string;
}

const listItemData: IListItemData[] = [
  { id: '1', name: 'Henry' },
  { id: '2', name: 'Frank' },
  { id: '3', name: 'Jess' },
  { id: '4', name: 'Bob' },
  { id: '5', name: 'Ashley' },
];

const Template: Story = () => {
  const [listItems, setListItems] = useState<IListItemData[]>([]);

  useEffect(() => {
    setListItems(listItemData);
  }, []);

  const handleDragEndEvent = (e: DragEndEvent) => {
    const { active, over } = e;

    if (over?.id && active.id !== over.id) {
      setListItems(items => {
        if (!items) return items;
        const oldIndex = items?.findIndex(item => item.id === active.id);
        const newIndex = items?.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <SortableList
      itemIds={listItems.map(i => i.id)}
      handleDragEnd={handleDragEndEvent}
    >
      {listItems.map(item => (
        <SortableListItem id={item.id} key={item.id}>
          <ListItem label={item.name} selected />
        </SortableListItem>
      ))}
    </SortableList>
  );
};

export const WithoutHandle = Template.bind({});

const WithHandleTemplate: Story = () => {
  const [listItems, setListItems] = useState<IListItemData[]>([]);

  useEffect(() => {
    setListItems(listItemData);
  }, []);

  const handleDragEndEvent = (e: DragEndEvent) => {
    const { active, over } = e;

    if (over?.id && active.id !== over.id) {
      setListItems(items => {
        if (!items) return items;
        const oldIndex = items?.findIndex(item => item.id === active.id);
        const newIndex = items?.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <SortableList
      itemIds={listItems.map(i => i.id)}
      handleDragEnd={handleDragEndEvent}
    >
      {listItems.map(item => (
        <SortableListItem useHandle id={item.id} key={item.id}>
          <ListItem
            decorator={<UserAvatar size="sm" shape="round" />}
            label={item.name}
            onClick={() => {}}
          />
        </SortableListItem>
      ))}
    </SortableList>
  );
};

export const WithHandle = WithHandleTemplate.bind({});
