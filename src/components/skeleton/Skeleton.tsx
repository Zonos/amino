import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled, { css, keyframes } from 'styled-components';

export type SkeletonProps = {
  className?: string;
  children?: ReactNode;
  width?: number;
  height?: number;
  animation?: boolean;
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
  className,
  children,
  width,
  height,
  animation = true,
}: SkeletonProps) => (
  <SkeletonWrapper
    width={width}
    height={height}
    animation={animation}
    className={className}
  >
    {children}
  </SkeletonWrapper>
);
