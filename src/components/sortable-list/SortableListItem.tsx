import type { ReactNode } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { DragIcon } from 'src/icons/DragIcon';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './SortableListItem.module.scss';

export type SortableListItemProps = BaseProps & {
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
  style,
  useHandle,
}: SortableListItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const listItemStyle = {
    ...style,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef}>
      {useHandle ? (
        <div className={styles.styledSortableListItem} style={listItemStyle}>
          <div className={styles.styledSortableSection}>{children}</div>
          {}
          <div {...listeners} {...attributes}>
            <DragIcon size={handleIconSize} />
          </div>
        </div>
      ) : (
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
