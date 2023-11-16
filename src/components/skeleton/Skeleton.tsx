import type { ReactNode } from 'react';

import styled, { css, keyframes } from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

export type SkeletonProps = BaseProps & {
  animation?: boolean;
  children?: ReactNode;
  height?: number;
  width?: number;
};

const shimmerAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  75%, 100% {
    transform: translateX(100%);
  }
`;

const waveAnimation = css`
  &::after {
    animation: 1.4s ${shimmerAnimation} 0.5s linear infinite;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.08),
      transparent
    );
    content: '';
    position: absolute;
    transform: translateX(-100%);
    inset: 0px;
  }
`;

const SkeletonWrapper = styled.div<SkeletonProps>`
  height: ${p => (p.height ? `${p.height}px` : `1em`)};
  width: ${p => (p.width ? `${p.width}px` : '100%')};
  border-radius: ${theme.radius6};
  position: relative;
  background: ${theme.gray200};
  overflow: hidden;

  ${p => p.animation && waveAnimation}
`;

/**
 * Displays a blocky outline of content that can be used as a loader
 *
 * @param width - Optional width in pixels
 * @param height - Optional height in em
 */
export const Skeleton = ({
  animation = true,
  children,
  className,
  height,
  width,
}: SkeletonProps) => (
  <SkeletonWrapper
    animation={animation}
    className={className}
    height={height}
    width={width}
  >
    {children}
  </SkeletonWrapper>
);
