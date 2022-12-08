import { ReactElement, ReactNode } from 'react';

import { Collapse } from 'src/components/collapse/Collapse';
import { theme } from 'src/styles/constants/theme';
import { type StyledProps } from 'src/types/StyledProps';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledNavigationItemIcon = styled.div``;
const StyledNavigationContent = styled.div``;

const StyledNavigationItem = styled.div<StyledNavigationItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  padding: 0 ${theme.spaceHalf};
  color: ${theme.grayD40};
  font-weight: 500;
  border-radius: ${theme.radius};
  &:hover {
    background-color: ${theme.grayL80};
    color: black;
    svg {
      color: ${theme.grayD20};
    }
  }
  svg {
    color: ${theme.grayBase};
  }
  ${StyledNavigationContent} {
    flex-grow: 1;
    & > * {
      height: 100%;
    }
  }
  ${({ $icon }) =>
    !!$icon &&
    css`
      ${StyledNavigationItemIcon} {
        flex-basis: 31px;
        flex-grow: 0;
        flex-shrink: 0;
      }
    `}
  ${({ $isActive }) =>
    $isActive &&
    css`
      && {
        background-color: ${theme.grayL60};
        color: black;
        svg {
          color: black;
        }
      }
    `}
`;

const StyledItemWrapper = styled.div<StyledNavigationGroupItemProps>`
  ${({ $isExpand }) =>
    $isExpand &&
    css`
      ${StyledNavigationItem} {
        color: black;
        &:hover {
          background-color: transparent;
        }
        svg {
          color: black;
        }
      }
    `}
`;
const StyledGroupItemWrapper = styled(Collapse)`
  padding-left: ${theme.space};
  margin-left: ${theme.space};
  border-left: 1px solid ${theme.grayL60};
`;

type StyledNavigationItemProps = StyledProps<NavigationItemProps>;
type StyledNavigationGroupItemProps = StyledProps<NavigationGroupProps>;

export type NavigationItemProps = {
  content: ReactNode;
  className?: string;
  icon?: ReactNode;
  isActive?: boolean;
};

export type NavigationGroupProps = {
  /** **NOTE**: Should be `NavigationItem` component in order to have proper styling. If you want to use `href`, WRAP the `anchor` tag outside of the `NavigationItem` component. */
  content: ReactElement<NavigationItemProps> | HTMLAnchorElement;
  className?: string;
  children: ReactNode;
  isExpand?: boolean;
};

export const NavigationItem = ({
  content,
  className,
  icon,
  isActive,
}: NavigationItemProps) => (
  <StyledNavigationItem
    className={className}
    $content={content}
    $icon={icon}
    $isActive={isActive}
  >
    {icon && <StyledNavigationItemIcon>{icon}</StyledNavigationItemIcon>}
    {content}
  </StyledNavigationItem>
);

export const NavigationGroup = ({
  content,
  children,
  className,
  isExpand,
}: NavigationGroupProps) => (
  <Wrapper className={className}>
    <StyledItemWrapper $isExpand={!!isExpand}>{content}</StyledItemWrapper>
    <StyledGroupItemWrapper isExpand={!!isExpand}>
      {children}
    </StyledGroupItemWrapper>
  </Wrapper>
);
