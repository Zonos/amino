import styled, { css, keyframes } from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { Intent } from 'src/types';

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
  border: ${p => p.size! / 8}px solid ${theme.gray100};
  border-top-color: ${theme.blue600};
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
    border-right-color: ${theme.gray100};
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
    border-top-color: ${theme.gray0};
    &::before {
      border-right-color: rgba(255, 255, 255, 0.3);
    }
  }

  &.info {
    border-top-color: ${theme.blue600};
  }
  &.success {
    border-top-color: ${theme.green600};
  }
  &.danger {
    border-top-color: ${theme.red600};
  }
  &.warning {
    border-top-color: ${theme.orange600};
  }
`;

export type SpinnerColor =
  | 'black'
  | 'white'
  | Exclude<Intent, 'default' | 'error'>;

export type SpinnerProps = {
  className?: string;
  color?: SpinnerColor;
  size?: number;
};

export const Spinner = ({ className, color, size }: SpinnerProps) => (
  <AminoSpinner
    className={[className, color || ''].join(' ')}
    color={color}
    size={size || 32}
  />
);
