import React, { ReactNode, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { StyledProps } from 'types/StyledProps';

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
export const Collapse = ({
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
