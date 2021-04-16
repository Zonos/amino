import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const AminoSpinner = styled.div<SpinnerProps>`
  display: inline-block;
  border: ${p => p.size! / 8}px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--amino-gray-900);
  animation: ${css`
      ${Rotate}`} 800ms linear infinite;
  border-radius: 50%;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
`;

export type SpinnerProps = {
  size?: number;
};

export const Spinner = ({ size }: SpinnerProps) => {
  return <AminoSpinner size={size} />;
};

Spinner.defaultProps = { size: 32 };
