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

import type { DragEndEvent } from 'src/components/sortable-list/SortableListDeps';

import styles from './SortableList.module.scss';

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
      <div className={styles.styledSortableList}>{children}</div>
    </SortableContext>
  </DndContext>
);
