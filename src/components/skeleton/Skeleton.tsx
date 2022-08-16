import React from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export type SkeletonProps = {
  width?: number;
  height?: number;
};

/* animation: ${(p) => shimmerAnimation(p.width || 100)} 3s infinite; */
const SkeletonWrapper = styled.div<SkeletonProps>`
  height: ${p => (p.height ? `${p.height}px` : `1em`)};
  width: ${p => `${p.width}px` || '100%'};
  border-radius: ${theme.radius};
  position: relative;
  background: ${theme.grayL60};
`;

/**
 * Displays a blocky outline of content that can be used as a loader
 *
 * @param width - Optional width in pixels
 * @param height - Optional height in em
 */
export const Skeleton = ({ width, height }: SkeletonProps) => (
  <SkeletonWrapper width={width} height={height} />
);
