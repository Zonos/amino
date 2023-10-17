import type { MouseEventHandler, ReactNode } from 'react';

import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${theme.space8};
  line-height: 24px;
  user-select: none;
  cursor: pointer;
  border-radius: ${theme.radius6};
  font-size: ${theme.fontSizeBase};

  &:hover {
    background: ${theme.hoverColor};
  }

  a {
    width: 100%;
    display: block;
  }

  svg {
    margin-right: ${theme.space8};
  }

  [data-theme='night'] & {
    &:hover {
      background: ${theme.gray100};
    }
  }
`;

type MenuItemProps = BaseProps & {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: MouseEventHandler;
};

export const MenuItem = ({
  children,
  className,
  icon,
  onClick,
}: MenuItemProps) => (
  <StyledListItem className={className} onClick={onClick}>
    {icon}
    {children}
  </StyledListItem>
);
