import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmerAnimation = (width: number) => keyframes`
  0% {
    left: -${width}px;
  }
  100% {
    left: ${width}px;
  }
`;

export type SkeletonProps = {
  width?: number;
  height?: number;
  noShimmer?: boolean;
};

/* animation: ${(p) => shimmerAnimation(p.width || 100)} 3s infinite; */
const SkeletonWrapper = styled.div<SkeletonProps>`
  height: ${p => (p.height ? `${p.height}px` : `1em`)};
  width: ${p => `${p.width}px` || '100%'};
  border-radius: var(--amino-radius);
  position: relative;
  background: var(--amino-gray-200);
`;

const SkeletonShimmer = styled.div<{ width: number }>`
  width: 65%;
  height: 100%;
  display: block;
  content: ' ';
  background: var(--amino-gray-50);
  animation: 2s infinite ${p => shimmerAnimation(p.width)};
  animation-timing-function: ease-in-out;
  position: absolute;
  left: 0;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

/**
 * Displays a blocky outline of content that can be used as a loader
 *
 * @param width - Optional width in pixels
 * @param height - Optional height in em
 */
export const Skeleton = ({ width, height, noShimmer }: SkeletonProps) => (
  <SkeletonWrapper width={width} height={height}>
    {!noShimmer && <SkeletonShimmer width={width || 100} />}
  </SkeletonWrapper>
);
