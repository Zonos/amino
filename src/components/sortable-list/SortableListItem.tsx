import type { ReactNode } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';

import { DragIcon } from 'src/icons/DragIcon';
import { theme } from 'src/styles/constants/theme';

const StyledSortableListItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${theme.space24};
`;

const StyledSortableSection = styled.div`
  flex-grow: 1;
`;

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
        <StyledSortableListItem style={style}>
          <StyledSortableSection>{children}</StyledSortableSection>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <div {...listeners} {...attributes}>
            <DragIcon size={handleIconSize} />
          </div>
        </StyledSortableListItem>
      ) : (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <StyledSortableListItem style={style} {...listeners} {...attributes}>
          <StyledSortableSection>{children}</StyledSortableSection>
        </StyledSortableListItem>
      )}
    </div>
  );
};
