import { ReactNode } from 'react';

import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export interface TagProps {
  children?: ReactNode | string;
  className?: string;
  icon?: ReactNode;
  iconRight?: boolean;
  onClose: () => void;
}

const TagWrapper = styled.div`
  display: inline-block;
`;
const StyledTag = styled.button<Omit<TagProps, 'onClose'>>`
  display: flex;
  gap: ${theme.spaceQuarter};
  font-size: ${theme.typeScaleBase};
  font-weight: normal;
  padding: 3px ${theme.spaceHalf};
  text-align: center;
  font-weight: 500;
  // default background color (gray)
  background-color: ${theme.grayL60};
  color: ${theme.grayD40};
  border-radius: ${theme.radius};
  align-items: center;
  &:hover {
    background-color: ${theme.grayL40};
  }
  p {
    margin: 0;
    font-weight: 700;
  }
  svg {
    order: ${({ iconRight }) => (iconRight ? '2' : '')};
  }
`;

export const Tag = ({
  children,
  className,
  icon,
  iconRight,
  onClose,
}: TagProps) => (
  <TagWrapper className={className}>
    <StyledTag iconRight={iconRight} onClick={onClose}>
      {icon}
      <p>{children}</p>
      <RemoveIcon size={16} />
    </StyledTag>
  </TagWrapper>
);
