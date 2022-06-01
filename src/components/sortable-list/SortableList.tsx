import React, { ReactNode, useEffect, useState } from 'react';

import { closestCenter, DndContext } from '@dnd-kit/core';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortingStrategy } from '@dnd-kit/sortable/dist/types';
import styled from 'styled-components';

import { DragEndEvent } from './SortableListDeps';

const StyledSortableList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export interface SortableListProps {
  children: ReactNode;
  itemIds: string[];
  handleDragEnd: (e: DragEndEvent) => void;
  sortingStrategy?: SortingStrategy;
}

export const SortableList = ({
  children,
  itemIds,
  handleDragEnd,
  sortingStrategy = verticalListSortingStrategy,
}: SortableListProps) => {
  const [sortableItems, setSortableItems] = useState<string[]>([]);

  useEffect(() => {
    setSortableItems(itemIds);
  }, [itemIds]);

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
      modifiers={[restrictToParentElement, restrictToVerticalAxis]}
    >
      <SortableContext items={sortableItems} strategy={sortingStrategy}>
        <StyledSortableList>{children}</StyledSortableList>
      </SortableContext>
    </DndContext>
  );
};
