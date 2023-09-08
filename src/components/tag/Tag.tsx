import type { ReactNode } from 'react';

import styled from 'styled-components';

import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';

type TagSize = 'base' | 'lg';

export interface TagProps {
  children?: ReactNode | string;
  className?: string;
  icon?: ReactNode;
  iconRight?: boolean;
  size?: TagSize;
  onClick?: () => void;
  onClose: () => void;
}

const TagWrapper = styled.div<{ $size: TagSize }>`
  display: inline-flex;
  // default background color (gray)
  background-color: ${theme.gray100};
  border-radius: ${theme.radius4};

  height: ${p => (p.$size === 'base' ? theme.space20 : theme.space24)};
`;

const StyledTagLeft = styled.button<Omit<TagProps, 'onClose'>>`
  display: inline-flex;
  font-size: ${theme.fontSizeS};
  background-color: ${theme.gray100};
  border-radius: ${theme.radius6} 0 0 ${theme.radius6};
  font-weight: normal;
  padding: ${p => (p.size === 'base' ? `2px ${theme.space4}` : `${theme.space4} ${theme.space4} ${theme.space4} ${theme.space8}`)};
  gap: ${theme.space4};
  color: ${theme.textColor};
  align-items: center;
  text-align: center;
  font-weight: 600;
  &:focus {
    outline: none;
  }
  p {
    margin: 0;
    font-weight: 600;
  }

  svg {
    order: ${({ iconRight }) => (iconRight ? '2' : '')};
  }
`;
const StyledTagRight = styled.button<{ size: TagSize }>`
  border-radius: ${theme.radius4};
  display: inline-flex;
  align-items: center;
  padding: ${p => (p.size === 'base' ? '2px 3px' : '4px 5px')};
`;

const StyledRemoveBtn = styled.div`
  display: flex;

  ${StyledTagRight}:hover & {
    background-color: ${theme.gray300};
    border-radius: 50%;
  }
`;
export const Tag = ({
  children,
  className,
  icon,
  iconRight,
  onClick,
  onClose,
  size = 'base',
}: TagProps) => (
  <TagWrapper $size={size} className={className}>
    <StyledTagLeft
      iconRight={iconRight}
      onClick={onClick}
      size={size}
      type="button"
    >
      {icon}
      <p>{children}</p>
    </StyledTagLeft>
    <StyledTagRight onClick={onClose} type="button" size={size}>
      <StyledRemoveBtn>
        <RemoveIcon size={14} />
      </StyledRemoveBtn>
    </StyledTagRight>
  </TagWrapper>
);
