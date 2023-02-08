import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useResizeAware } from 'src/utils/useResizeAware';
import styled from 'styled-components';

import { type StyledProps } from '../../types/StyledProps';

const StyledCollapseWrapper = styled.div<StyledCollapseProps>`
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: ${({ $hideOverflow }) => ($hideOverflow ? 'hidden' : 'auto')};
  position: relative;
  min-height: ${({ $collapseSize }) =>
    $collapseSize ? `${$collapseSize}px` : '0px'};
  height: ${({ $height }) => `${$height}px`};

  opacity: ${p => (p.$isExpand ? 1 : 0)};
`;

type StyledCollapseProps = StyledProps<
  CollapseProps & { height: number | null; hideOverflow: boolean }
>;

export type CollapseProps = {
  className?: string;
  isExpand: boolean;
  collapseSize?: number;
  children: ReactNode;
};
export const Collapse = ({
  className,
  isExpand,
  collapseSize,
  children,
}: CollapseProps) => {
  const [resizeListener, sizes] = useResizeAware();
  const [height, setHeight] = useState<number | null>(sizes.height);
  const [hideOverflow, setHideOverflow] = useState(!isExpand);
  const [definitelyCollapsed, setDefinitelyCollapsed] = useState(!isExpand);

  const el = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setHideOverflow(true);
    if (sizes.height && isExpand) {
      setHeight(sizes.height);
    } else {
      setHeight(0);
    }
  }, [isExpand, setHeight, sizes.height, hideOverflow]);

  useEffect(() => {
    const { current } = el;

    current?.addEventListener('transitionstart', () =>
      setDefinitelyCollapsed(false)
    );

    return () => {
      current?.removeEventListener('transitionstart', () =>
        setDefinitelyCollapsed(false)
      );
    };
  }, []);

  const handleTransitionEnd = () => {
    if (isExpand) {
      // Done expanding so safe to show overflow
      setHideOverflow(false);
      setDefinitelyCollapsed(false);
    } else {
      setHideOverflow(true);
      setDefinitelyCollapsed(true);
    }
  };

  return (
    <StyledCollapseWrapper
      className={className}
      $height={height}
      $isExpand={!definitelyCollapsed}
      $hideOverflow={hideOverflow}
      $collapseSize={collapseSize || 0}
      onTransitionEnd={handleTransitionEnd}
      ref={el}
    >
      <div style={{ position: 'relative' }}>
        {resizeListener}
        {children}
      </div>
    </StyledCollapseWrapper>
  );
};
