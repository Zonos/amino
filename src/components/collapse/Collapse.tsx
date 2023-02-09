import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';

import styled from 'styled-components';

type StyledCollapseProps = {
  completelyCollapsed: boolean;
  hideOverflow: boolean;
  currentlyExpanded: boolean;
  $height?: number;
  collapseSize: number;
};

const StyledCollapseWrapper = styled.div<StyledCollapseProps>`
  position: relative;
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: ${p => (p.hideOverflow ? 'hidden' : undefined)};
  visibility: ${p => (p.completelyCollapsed ? 'hidden' : undefined)};
  height: ${p =>
    p.currentlyExpanded ? `${p.$height}px` : `${p.collapseSize}px`};
`;

export type CollapseProps = {
  className?: string;
  children: ReactNode;
  isExpand: boolean;
  /** Size when collapsed
   * @default 0
   *
   */
  collapseSize?: number;
};
export const Collapse = ({
  className,
  children,
  isExpand,
  collapseSize = 0,
}: CollapseProps) => {
  const [completelyCollapsed, setCompletelyCollapsed] = useState(!isExpand);
  const [hideOverflow, setHideOverflow] = useState(!isExpand);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const contentHeight = contentWrapperRef.current?.clientHeight;

  useLayoutEffect(() => {
    setHideOverflow(true);
  }, [isExpand, hideOverflow]);

  useEffect(() => {
    const { current } = wrapperRef;

    current?.addEventListener('transitionstart', () => {
      setCompletelyCollapsed(false);
    });

    return () => {
      current?.removeEventListener('transitionstart', () =>
        setCompletelyCollapsed(false)
      );
    };
  }, []);

  const handleTransitionEnd = () => {
    if (isExpand) {
      // Done expanding so safe to show overflow
      setHideOverflow(false);
      setCompletelyCollapsed(false);
    } else {
      setHideOverflow(true);
      setCompletelyCollapsed(true);
    }
  };

  return (
    <StyledCollapseWrapper
      ref={wrapperRef}
      className={className}
      currentlyExpanded={isExpand}
      completelyCollapsed={completelyCollapsed}
      hideOverflow={hideOverflow}
      onTransitionEnd={handleTransitionEnd}
      $height={contentHeight}
      collapseSize={collapseSize}
    >
      <div style={{ position: 'relative' }} ref={contentWrapperRef}>
        {children}
      </div>
    </StyledCollapseWrapper>
  );
};
