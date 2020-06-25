import { keyframes } from "styled-components";

export const DropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DropdownAnimationInverse = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;
