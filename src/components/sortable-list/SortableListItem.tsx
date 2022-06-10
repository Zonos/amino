import React, { ReactNode } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DynamicIcon, DynamicIconType } from 'src/icons/icon-base/DynamicIcon';
import styled from 'styled-components';

const StyledSortableListItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--amino-space);
`;

const StyledSortableSection = styled.div`
  flex-grow: 1;
`;

export interface SortableListItemProps {
  children: ReactNode;
  useHandle?: boolean;
  id: string;
  handleIcon?: DynamicIconType;
  handleIconSize?: number;
}

export const SortableListItem = ({
  children,
  useHandle,
  id,
  handleIcon = 'DragIcon',
  handleIconSize = 15,
}: SortableListItemProps) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef}>
      {useHandle ? (
        <StyledSortableListItem style={style}>
          <StyledSortableSection>{children}</StyledSortableSection>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <div {...listeners} {...attributes}>
            <DynamicIcon type={handleIcon} size={handleIconSize} />
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
