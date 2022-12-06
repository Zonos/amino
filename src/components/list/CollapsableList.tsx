import React, { ReactNode, useEffect, useState } from 'react';

import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
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
`;

const StyledList = styled(List)<ListProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${({ withBorder }) =>
    withBorder &&
    css`
      padding: ${theme.spaceQuarter};
      border: 1px solid ${theme.grayL60};
      border-radius: ${theme.radiusXl};
    `}

  ${({ withNegativeMargin }) =>
    withNegativeMargin &&
    css`
      margin: ${theme.spaceNegative};
    `}
`;

export type CollapsableListProps = ListProps & {
  icon?: ReactNode;
  title: ReactNode;
  expandOnRender?: boolean;
};

export const CollapsableList = ({
  className,
  /** @description list of ListItem are recommended to pass in */
  children,
  expandOnRender,
  icon,
  title,
  withBorder,
  withNegativeMargin,
}: CollapsableListProps) => {
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    /* Trigger expand on collapse component when dom is ready to avoid getting wrong height */
    if (expandOnRender) {
      setTimeout(() => setExpand(!!expandOnRender), 200);
    }
  }, [expandOnRender]);
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
        onClick={() => setExpand(!expand)}
        rightDecorator={
          expand ? (
            <ChevronUpIcon color="gray-900" />
          ) : (
            <ChevronDownIcon color="gray-900" />
          )
        }
      />
      <StyledCollapse $hasIcon={!!icon} isExpand={!!expand}>
        {children}
      </StyledCollapse>
    </StyledList>
  );
};
