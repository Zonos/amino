import { type ReactNode, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

type StyledCollapseProps = {
  $height?: number;
  collapseSize: number;
  completelyCollapsed: boolean;
  currentlyCollapsed: boolean;
  hideOverflow: boolean;
};

const StyledCollapseWrapper = styled.div<StyledCollapseProps>`
  position: relative;
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: ${p => (p.hideOverflow ? 'hidden' : undefined)};
  visibility: ${p => (p.completelyCollapsed ? 'hidden' : undefined)};
  height: ${p =>
    p.currentlyCollapsed ? `${p.collapseSize}px` : `${p.$height}px`};
`;

export type CollapseProps = {
  children: ReactNode;
  className?: string;
  /**
   * Size when collapsed
   * @default 0
   */
  collapseSize?: number;
  /**
   * Collapsed state
   * @default false
   */
  collapsed?: boolean;
};
export const Collapse = ({
  children,
  className,
  collapsed = false,
  collapseSize = 0,
}: CollapseProps) => {
  const [completelyCollapsed, setCompletelyCollapsed] = useState(collapsed);
  const [hideOverflow, setHideOverflow] = useState(collapsed);
  const [contentHeight, setContentHeight] = useState<number | undefined>();

  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const getComputedHeight = () => {
    if (contentWrapperRef.current === null) {
      return undefined;
    }
    const computedStyle = window.getComputedStyle(contentWrapperRef.current);
    // Height already contains padding
    const height = parseFloat(computedStyle.height);
    const borderTop = parseFloat(computedStyle.borderTopWidth);
    const borderBottom = parseFloat(computedStyle.borderBottomWidth);
    const marginTop = parseFloat(computedStyle.marginTop);
    const marginBottom = parseFloat(computedStyle.marginBottom);
    const total = height + borderTop + borderBottom + marginTop + marginBottom;
    return total;
  };

  useEffect(() => {
    setContentHeight(getComputedHeight());
  }, []);

  useEffect(() => {
    setHideOverflow(true);
    if (!collapsed) {
      setCompletelyCollapsed(false);
    }
  }, [collapsed]);

  const handleTransitionEnd = () => {
    if (collapsed) {
      setHideOverflow(true);
      setCompletelyCollapsed(true);
    } else {
      // Done expanding so safe to show overflow
      setHideOverflow(false);
      setCompletelyCollapsed(false);
      setContentHeight(getComputedHeight());
    }
  };

  return (
    <StyledCollapseWrapper
      $height={contentHeight}
      className={className}
      collapseSize={collapseSize}
      completelyCollapsed={completelyCollapsed}
      currentlyCollapsed={collapsed}
      hideOverflow={hideOverflow}
      onTransitionEnd={handleTransitionEnd}
    >
      <div ref={contentWrapperRef} style={{ position: 'relative' }}>
        {children}
      </div>
    </StyledCollapseWrapper>
  );
};
