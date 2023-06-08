import type { ReactNode } from 'react';

import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export interface TagProps {
  children?: ReactNode | string;
  className?: string;
  icon?: ReactNode;
  iconRight?: boolean;
  onClose?: () => void;
  isCode?: boolean;
  disabled?: boolean;
}

const TagWrapper = styled.div`
  display: inline-block;
`;
const StyledTag = styled.button<Omit<TagProps, 'onClose'>>`
  display: flex;
  gap: ${theme.space8};
  font-size: ${theme.typeScaleBase};
  font-weight: normal;
  padding: 3px ${({ isCode }) => (isCode ? theme.space4 : theme.space16)};
  text-align: center;
  font-weight: 500;
  // default background color (gray)
  background-color: ${theme.surfaceColorSecondary};
  color: ${({ isCode, disabled }) => {
    if (isCode && disabled) {
      return theme.gray600;
    }
    if (isCode) {
      return theme.gray1200;
    }
    return theme.textColor;
  }};
  border-radius: ${theme.radius6};
  align-items: center;
  &:hover {
    background-color: ${({ isCode }) =>
      isCode ? theme.surfaceColorSecondary : theme.gray300};
  }
  p {
    margin: 0;
    font-weight: ${({ isCode }) => (isCode ? 400 : 700)};
    font-family: ${({ isCode }) => (isCode ? theme.fontMono : 'inherit')};
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
  isCode,
  disabled,
}: TagProps) => (
  <TagWrapper className={className}>
    <StyledTag
      type="button"
      iconRight={iconRight}
      onClick={onClose}
      isCode={isCode}
      disabled={disabled}
    >
      {icon}
      <p>{children}</p>
      {onClose && <RemoveIcon size={16} />}
    </StyledTag>
  </TagWrapper>
);
