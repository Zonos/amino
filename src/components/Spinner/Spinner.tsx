import React from "react";
import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const AminoSpinner = styled.div<Props>`
  display: inline-block;
  border: ${p => p.size! / 8}px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--amino-gray-900);
  animation: ${Rotate} 800ms linear infinite;
  border-radius: 50%;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
`;

type Props = {
  size?: number;
};

export const Spinner: React.FC<Props> = ({ size }) => {
  return <AminoSpinner size={size} />;
};

Spinner.defaultProps = { size: 32 };
