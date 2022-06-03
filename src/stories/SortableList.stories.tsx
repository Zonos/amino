import React, { useEffect, useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Input } from 'src/components/input/Input';
import { SortableList } from 'src/components/sortable-list/SortableList';
import {
  arrayMove,
  DragEndEvent,
} from 'src/components/sortable-list/SortableListDeps';
import { SortableListItem } from 'src/components/sortable-list/SortableListItem';
import { withDesign } from 'storybook-addon-designs';

const SortableListMeta: Meta = {
  title: 'Amino/SortableList',
  component: SortableList,
  decorators: [withDesign],
};

export default SortableListMeta;

interface IListItemData {
  id: string;
  name: string;
}

const listItemData: IListItemData[] = [
  { id: '1', name: 'First' },
  { id: '2', name: 'Second' },
  { id: '3', name: 'Third' },
  { id: '4', name: 'Fourth' },
  { id: '5', name: 'Fifth' },
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
      itemIds={listItemData.map(i => i.id)}
      handleDragEnd={handleDragEndEvent}
    >
      {listItems.map(item => (
        <SortableListItem id={item.id} key={item.id}>
          <Input value={item.name} onChange={() => {}} />
        </SortableListItem>
      ))}
    </SortableList>
  );
};

export const WithoutHandleList = Template.bind({});

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
          <Input value={item.name} onChange={() => {}} />
        </SortableListItem>
      ))}
    </SortableList>
  );
};

export const WithHandleList = WithHandleTemplate.bind({});
