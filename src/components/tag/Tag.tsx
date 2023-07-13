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
  background-color: ${theme.gray200};
  border-radius: ${theme.radius6};

  height: ${p => (p.$size === 'base' ? theme.space20 : theme.space24)};
`;

const StyledTagLeft = styled.button<Omit<TagProps, 'onClose'>>`
  display: inline-flex;
  font-size: ${p => (p.size === 'base' ? theme.fontSizeS : theme.fontSizeBase)};
  background-color: ${theme.gray200};
  border-radius: ${theme.radius6} 0 0 ${theme.radius6};
  gap: ${theme.space8};
  font-weight: normal;
  padding: 0 ${theme.space8};

  color: ${theme.gray800};
  align-items: center;
  text-align: center;
  font-weight: 500;
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
const StyledTagRight = styled.button`
  border-radius: 0 ${theme.radius6} ${theme.radius6} 0;
  display: inline-flex;
  align-items: center;
  padding: ${theme.space4};
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
    <StyledTagRight onClick={onClose} type="button">
      <StyledRemoveBtn>
        <RemoveIcon size={14} />
      </StyledRemoveBtn>
    </StyledTagRight>
  </TagWrapper>
);
