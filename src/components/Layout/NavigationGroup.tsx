import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import styled, { css } from 'styled-components';

import { StyledProps } from 'types/StyledProps';

/**
 * START ======== Collapse Component ========
 * */
const StyledCollapseWrapper = styled.div<StyledCollapseWrapperProps>`
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  position: relative;
  min-height: ${({ $collapseSize }) =>
    $collapseSize ? `${$collapseSize}px` : '0px'};
  height: ${({ $height }) => `${$height}px`};
`;

type StyledCollapseWrapperProps = StyledProps<
  CollapseWrapperProps & { height: number }
>;

export type CollapseWrapperProps = {
  className?: string;
  isExpand: boolean;
  collapseSize?: number;
  children: ReactNode;
};
export const CollapseWrapper = ({
  className,
  isExpand,
  collapseSize,
  children,
}: CollapseWrapperProps) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current && isExpand) {
      setHeight(ref.current.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [isExpand, setHeight]);
  return (
    <StyledCollapseWrapper
      className={className}
      $height={height}
      $isExpand={isExpand}
      $collapseSize={collapseSize || 0}
    >
      <div ref={ref}>{children}</div>
    </StyledCollapseWrapper>
  );
};

/**
 * END ======== Collapse Component ========
 * */

/**
 * START ======== Navigation Group Component ========
 * */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledNavigationItemIcon = styled.div``;
const StyledNavigationContent = styled.div``;
const StyledNavigationItem = styled.div<StyledProps<NavigationItemProps>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  padding: 0 var(--amino-space-half);
  color: var(--amino-gray-700);
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
      background-color: var(--amino-gray-200);
      color: black;
      border-radius: var(--amino-radius);
    `}
`;

const StyledItemWrapper = styled.div``;
const StyledGroupItemWrapper = styled(CollapseWrapper)`
  padding-left: var(--amino-space);
  margin-left: var(--amino-space);
  border-left: 1px solid var(--amino-gray-200);
`;

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
}: NavigationItemProps) => {
  return (
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
};

export const NavigationGroup = ({
  content,
  children,
  className,
  isExpand,
}: NavigationGroupProps) => {
  return (
    <Wrapper className={className}>
      <StyledItemWrapper>{content}</StyledItemWrapper>
      <StyledGroupItemWrapper isExpand={!!isExpand}>
        {children}
      </StyledGroupItemWrapper>
    </Wrapper>
  );
};

/**
 * END ======== Navigation Group Component ========
 * */
