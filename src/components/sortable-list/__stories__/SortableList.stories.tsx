import { useEffect, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { UserAvatar } from 'src/components/avatar/UserAvatar';
import { ListItem } from 'src/components/list-item/ListItem';
import { SortableList } from 'src/components/sortable-list/SortableList';
import {
  arrayMove,
  type DragEndEvent,
} from 'src/components/sortable-list/SortableListDeps';
import { SortableListItem } from 'src/components/sortable-list/SortableListItem';

const SortableListMeta: Meta = {
  component: SortableList,
};

export default SortableListMeta;

type ListItemData = {
  id: string;
  name: string;
};

const listItemData: ListItemData[] = [
  { id: '1', name: 'Henry' },
  { id: '2', name: 'Frank' },
  { id: '3', name: 'Jess' },
  { id: '4', name: 'Bob' },
  { id: '5', name: 'Ashley' },
];

const Template: StoryFn = () => {
  const [listItems, setListItems] = useState<ListItemData[]>([]);

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
      handleDragEnd={handleDragEndEvent}
      itemIds={listItems.map(i => i.id)}
    >
      {listItems.map(item => (
        <SortableListItem key={item.id} id={item.id}>
          <ListItem label={item.name} selected />
        </SortableListItem>
      ))}
    </SortableList>
  );
};

export const WithoutHandle = Template.bind({});

const WithHandleTemplate: StoryFn = () => {
  const [listItems, setListItems] = useState<ListItemData[]>([]);

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
      handleDragEnd={handleDragEndEvent}
      itemIds={listItems.map(i => i.id)}
    >
      {listItems.map(item => (
        <SortableListItem key={item.id} id={item.id} useHandle>
          <ListItem
            decorator={<UserAvatar shape="round" size={16} />}
            label={item.name}
            onClick={() => {}}
          />
        </SortableListItem>
      ))}
    </SortableList>
  );
};

export const WithHandle = WithHandleTemplate.bind({});
