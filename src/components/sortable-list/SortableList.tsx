import type { ReactNode } from 'react';

import { closestCenter, DndContext } from '@dnd-kit/core';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { SortingStrategy } from '@dnd-kit/sortable/dist/types';
import styled from 'styled-components';

import type { DragEndEvent } from 'src/components/sortable-list/SortableListDeps';

const StyledSortableList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export type SortableListProps = {
  children: ReactNode;
  itemIds: string[];
  sortingStrategy?: SortingStrategy;
  handleDragEnd: (e: DragEndEvent) => void;
};

export const SortableList = ({
  children,
  handleDragEnd,
  itemIds,
  sortingStrategy = verticalListSortingStrategy,
}: SortableListProps) => (
  <DndContext
    collisionDetection={closestCenter}
    modifiers={[restrictToParentElement, restrictToVerticalAxis]}
    onDragEnd={handleDragEnd}
  >
    <SortableContext items={itemIds} strategy={sortingStrategy}>
      <StyledSortableList>{children}</StyledSortableList>
    </SortableContext>
  </DndContext>
);
