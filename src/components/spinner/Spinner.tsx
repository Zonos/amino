import React from 'react';

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

const AminoSpinner = styled.span<SpinnerProps>`
  display: inline-block;
  border: ${p => p.size! / 8}px solid var(--amino-gray-l80);
  border-top-color: var(--amino-blue-base);
  animation: ${css`
      ${Rotate}`} 1.5s linear infinite;
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
    border-right-color: var(--amino-gray-l80);
    z-index: 1;
    animation: ${css`
        ${RotateInsideRing}`} 1.5s linear infinite;
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
`;

type Color = 'black' | 'white';

export type SpinnerProps = {
  size?: number;
  color?: Color;
  className?: string;
};

export const Spinner = ({ size, color, className }: SpinnerProps) => {
  return (
    <AminoSpinner className={[className, color || ''].join(' ')} size={size} />
  );
};

Spinner.defaultProps = { size: 32 };
