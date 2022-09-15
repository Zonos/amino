import React, { ReactNode, useEffect, useState } from 'react';
import useResizeAware from 'react-resize-aware';

import styled from 'styled-components';

import { type StyledProps } from '../../types/StyledProps';

const StyledCollapseWrapper = styled.div<StyledCollapseProps>`
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  position: relative;
  min-height: ${({ $collapseSize }) =>
    $collapseSize ? `${$collapseSize}px` : '0px'};
  height: ${({ $height }) => `${$height}px`};
`;

type StyledCollapseProps = StyledProps<CollapseProps & { height: number }>;

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
  const [height, setHeight] = useState(0);
  const [resizeListener, sizes] = useResizeAware();

  useEffect(() => {
    if (sizes.height && isExpand) {
      setHeight(sizes.height);
    } else {
      setHeight(0);
    }
  }, [isExpand, setHeight, sizes.height]);

  return (
    <StyledCollapseWrapper
      className={className}
      $height={height}
      $isExpand={isExpand}
      $collapseSize={collapseSize || 0}
    >
      <div style={{ position: 'relative' }}>
        {resizeListener}
        {children}
      </div>
    </StyledCollapseWrapper>
  );
};
