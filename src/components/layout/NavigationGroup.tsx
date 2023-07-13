import type { ReactElement, ReactNode } from 'react';

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
  height: 32px;
  padding: ${theme.space4} ${theme.space8} ${theme.space4} 6px;
  color: ${theme.gray800};
  font-weight: 500;
  border-radius: ${theme.radius6};
  &:hover {
    background-color: ${theme.gray50};
    color: ${theme.gray1200};
    svg {
      color: ${theme.gray700};
    }
  }
  svg {
    color: ${theme.gray600};
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
        background-color: ${theme.gray100};
        color: ${theme.gray1200};
        svg {
          color: ${theme.gray1200};
        }
      }
    `}
`;

const StyledItemWrapper = styled.div<StyledNavigationGroupItemProps>`
  ${({ $collapsed }) =>
    !$collapsed &&
    css`
      ${StyledNavigationItem} {
        color: ${theme.gray1200};
        &:hover {
          background-color: transparent;
        }
        svg {
          color: ${theme.gray1200};
        }
      }
    `}
`;
const StyledGroupItemWrapper = styled(Collapse)`
  padding-left: 18px;
  margin-left: 15px;
  border-left: 1px solid ${theme.gray200};
`;

type StyledNavigationItemProps = StyledProps<NavigationItemProps>;
type StyledNavigationGroupItemProps = StyledProps<NavigationGroupProps>;

export type NavigationItemProps = {
  className?: string;
  content: ReactNode;
  icon?: ReactNode;
  isActive?: boolean;
};

export type NavigationGroupProps = {
  children: ReactNode;
  className?: string;
  /**
   * @default false
   */
  collapsed?: boolean;
  /** **NOTE**: Should be `NavigationItem` component in order to have proper styling. If you want to use `href`, WRAP the `anchor` tag outside of the `NavigationItem` component. */
  content: ReactElement<NavigationItemProps> | HTMLAnchorElement;
};

export const NavigationItem = ({
  className,
  content,
  icon,
  isActive,
}: NavigationItemProps) => (
  <StyledNavigationItem
    $content={content}
    $icon={icon}
    $isActive={isActive}
    className={className}
  >
    {icon && <StyledNavigationItemIcon>{icon}</StyledNavigationItemIcon>}
    {content}
  </StyledNavigationItem>
);

export const NavigationGroup = ({
  children,
  className,
  collapsed = false,
  content,
}: NavigationGroupProps) => (
  <Wrapper className={className}>
    <StyledItemWrapper $collapsed={collapsed}>{content}</StyledItemWrapper>
    <StyledGroupItemWrapper collapsed={collapsed}>
      {children}
    </StyledGroupItemWrapper>
  </Wrapper>
);
