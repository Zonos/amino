import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { XIcon } from 'icons';

export interface TagProps {
  children?: ReactNode | string;
  className?: string;
  icon?: ReactNode;
  iconRight?: boolean;
  inverted?: boolean;
  onClose: () => void;
}

const TagWrapper = styled.div`
  display: inline-block;
`;
const StyledTag = styled.button<Omit<TagProps, 'onClose'>>`
  display: flex;
  gap: var(--amino-space-quarter);
  font-size: var(--amino-type-scale-base);
  font-weight: normal;
  padding: 3px var(--amino-space-half);
  text-align: center;
  font-weight: 500;
  // default background color (gray)
  background-color: var(--amino-gray-200);
  color: var(--amino-gray-700);
  border-radius: var(--amino-radius);
  align-items: center;
  &:hover {
    background-color: var(--amino-gray-300);
  }
  p {
    margin: 0;
    font-weight: 700;
  }
  img {
    width: 21px !important;
    order: ${({ iconRight }) => (iconRight ? '2' : '')};
  }
`;

export const Tag = ({
  children,
  className,
  icon,
  iconRight,
  inverted,
  onClose,
}: TagProps) => {
  return (
    <TagWrapper className={className}>
      <StyledTag inverted={!!inverted} iconRight={iconRight} onClick={onClose}>
        {icon}
        <p>{children}</p>
        <XIcon size={16} />
      </StyledTag>
    </TagWrapper>
  );
};
