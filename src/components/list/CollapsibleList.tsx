import { ReactNode, useState } from 'react';

import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import { theme } from 'src/styles/constants/theme';
import styled, { css } from 'styled-components';

import { Collapse } from '../collapse/Collapse';
import { ListItem } from '../list-item/ListItem';
import { List, ListProps } from './List';

const StyledCollapse = styled(Collapse)<{ $hasIcon: boolean }>`
  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      .___icon-wrapper {
        width: 32px;
        display: inline-block;
      }
    `}
`;

const StyledPrimaryListItem = styled(ListItem)<{ $hasIcon: boolean }>`
  ${({ $hasIcon }) =>
    !$hasIcon &&
    css`
      .___icon-wrapper {
        display: none;
      }
    `}

  svg {
    transition: ${theme.transition};

    &.collapsed {
      opacity: 1;
      transform: rotate(180deg);
    }
  }
`;

const StyledList = styled(List)<ListProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${({ withBorder }) =>
    withBorder &&
    css`
      padding: ${theme.space8};
      border: 1px solid ${theme.gray200};
      border-radius: ${theme.radius12};
    `}

  ${({ withNegativeMargin }) =>
    withNegativeMargin &&
    css`
      margin: ${theme.spaceNegative24};
    `}
`;

export type CollapsibleListProps = ListProps & {
  icon?: ReactNode;
  title: ReactNode;
  /**
   * Whether to start expanded
   * @default false
   */
  startExpanded?: boolean;
};

export const CollapsibleList = ({
  className,
  /** @description list of ListItem are recommended to pass in */
  children,
  startExpanded,
  icon,
  title,
  withBorder,
  withNegativeMargin,
}: CollapsibleListProps) => {
  const [collapsed, setCollapsed] = useState(!startExpanded);

  return (
    <StyledList
      className={className}
      withBorder={withBorder}
      withNegativeMargin={withNegativeMargin}
    >
      <StyledPrimaryListItem
        $hasIcon={!!icon}
        decorator={icon}
        label={title}
        onClick={() => setCollapsed(!collapsed)}
        rightDecorator={
          <ChevronUpIcon className={collapsed ? 'collapsed' : ''} />
        }
      />
      <StyledCollapse $hasIcon={!!icon} collapsed={collapsed}>
        {children}
      </StyledCollapse>
    </StyledList>
  );
};