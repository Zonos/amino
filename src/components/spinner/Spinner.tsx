import React from 'react';

import { theme } from 'src/styles/constants/theme';
import { ThemeColor } from 'src/types/Color';
import styled, { css, keyframes } from 'styled-components';

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  35%{
    transform: rotate(360deg);
  }
  70% {
    transform: rotate(697.5deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

const RotateInsideRing = keyframes`
  65%, 75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const spinDuration = '1.5s';

const AminoSpinner = styled.span<SpinnerProps>`
  display: inline-block;
  border: ${p => p.size! / 8}px solid ${theme.grayL80};
  border-top-color: ${theme.blueBase};
  animation: ${css`
      ${Rotate}`} ${spinDuration} linear infinite;
  border-radius: 50%;
  transform: rotate(45deg);
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -${p => p.size! / 8}px;
    left: -${p => p.size! / 8}px;
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    border-radius: 50%;
    border: ${p => p.size! / 8}px solid transparent;
    border-right-color: ${theme.grayL80};
    z-index: 1;
    animation: ${css`
        ${RotateInsideRing}`} ${spinDuration} linear infinite;
  }

  &.black {
    border: ${p => p.size! / 8}px solid rgba(0, 0, 0, 0.3);
    border-top-color: #0c0c0c;
    &::before {
      border-right-color: rgba(0, 0, 0, 0.5);
    }
  }

  &.white {
    border: ${p => p.size! / 8}px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    &::before {
      border-right-color: rgba(255, 255, 255, 0.3);
    }
  }

  &.info {
    border-top-color: ${theme.blueBase};
  }
  &.success {
    border-top-color: ${theme.greenBase};
  }
  &.danger {
    border-top-color: ${theme.redBase};
  }
  &.warning {
    border-top-color: ${theme.orangeBase};
  }
`;

export type SpinnerColor = 'black' | 'white' | ThemeColor;

export type SpinnerProps = {
  size?: number;
  color?: SpinnerColor;
  className?: string;
};

export const Spinner = ({ size, color, className }: SpinnerProps) => {
  return (
    <AminoSpinner
      className={[className, color || ''].join(' ')}
      size={size || 32}
      color={color}
    />
  );
};
