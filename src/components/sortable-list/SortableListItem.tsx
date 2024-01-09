import type { ReactNode } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { DragIcon } from 'src/icons/DragIcon';

import styles from './SortableListItem.module.scss';

export type SortableListItemProps = {
  children: ReactNode;
  handleIconSize?: number;
  id: string;
  useHandle?: boolean;
};

/** @description This must be a direct child of SortableList */
export const SortableListItem = ({
  children,
  handleIconSize = 20,
  id,
  useHandle,
}: SortableListItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef}>
      {useHandle ? (
        <div className={styles.styledSortableListItem} style={style}>
          <div className={styles.styledSortableSection}>{children}</div>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <div {...listeners} {...attributes}>
            <DragIcon size={handleIconSize} />
          </div>
        </div>
      ) : (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div
          className={styles.styledSortableListItem}
          style={style}
          {...listeners}
          {...attributes}
        >
          <div className={styles.styledSortableSection}>{children}</div>
        </div>
      )}
    </div>
  );
};
