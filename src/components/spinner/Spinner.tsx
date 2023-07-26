import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

// Stop container from scrolling when it rotates
const Wrapper = styled.div<{ size: number }>`
  position: relative;
  overflow: hidden;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
`;

// Inspired by https://codesandbox.io/s/loading-spinner-and-background-1yqdo?file=/src/loadingspinner.less:0-65
const StyledSvg = styled.svg<{ size: number }>`
  position: absolute;
  width: ${p => p.size}px;
  height: ${p => p.size}px;

  stroke: ${theme.blue600};

  circle.track {
    stroke: ${theme.gray200};
  }

  &.black {
    border: ${p => p.size! / 8}px solid ${theme.spinnerBorderColorBlack};
    border-top-color: ${theme.spinnerBorderTopColorBlack};
    &::before {
      border-right-color: ${theme.spinnerBorderRightColorBlack};
    stroke: ${theme.gray1200};

    circle.track {
      stroke: rgba(0, 0, 0, 0.3);
    }
  }
  &.white {
    border: ${p => p.size! / 8}px solid ${theme.spinnerBorderColorWhite};
    border-top-color: ${theme.spinnerBorderTopColorWhite};
    &::before {
      border-right-color: ${theme.spinnerBorderRightColorWhite};
    stroke: ${theme.gray0};

    circle.track {
      stroke: rgba(255, 255, 255, 0.3);
    }
  }
  &.info {
    border: ${p => p.size! / 8}px solid ${theme.blue100};
    border-top-color: ${theme.primary};
    &:before {
      border-right-color: ${theme.blue100};
    }
  }
  &.success {
    border: ${p => p.size! / 8}px solid ${theme.green100};
    border-top-color: ${theme.success};
    &:before {
      border-right-color: ${theme.green100};
    }
  }
  &.danger {
    border: ${p => p.size! / 8}px solid ${theme.red100};
    border-top-color: ${theme.danger};
    &:before {
      border-right-color: ${theme.orange100};
    }
  }
  &.warning {
    border: ${p => p.size! / 8}px solid ${theme.orange100};
    border-top-color: ${theme.warning};
    &:before {
      border-right-color: ${theme.orange100};
    }
    stroke: ${theme.blue600};
  }
  &.success {
    stroke: ${theme.green600};
  }
  &.danger {
    stroke: ${theme.red600};
  }
  &.warning {
    stroke: ${theme.orange600};
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  animation: rotate 2s linear infinite;

  circle:not(.track) {
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
`;

export type SpinnerColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'danger'
  | 'warning'
  | 'black'
  | 'white';

export type SpinnerProps = {
  className?: string;
  /**
   * @default 'primary'
   */
  color?: SpinnerColor;
  /**
   * @default 32
   */
  size?: number;
};

export const Spinner = ({
  className,
  color = 'primary',
  size = 32,
}: SpinnerProps) => (
  <Wrapper size={size}>
    <StyledSvg
      className={[className, color, 'amino-spinner'].join(' ')}
      size={size}
      viewBox="0 0 50 50"
    >
      <circle
        className="track"
        cx="25"
        cy="25"
        fill="none"
        id="loading-spinner-circle"
        r="20"
        strokeWidth="5"
      />
      <circle
        cx="25"
        cy="25"
        fill="none"
        id="loading-spinner-circle"
        r="20"
        strokeWidth="5"
      />
    </StyledSvg>
  </Wrapper>
);
