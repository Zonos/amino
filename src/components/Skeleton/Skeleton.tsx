import React from "react";
import styled, { keyframes } from "styled-components";

const Pulse = keyframes`
  from {
    transform: scaleX(0);
    opacity: 1;
  } 
  to {
    opacity: 0;
    transform: scaleX(1.5);
  }
`;

const Pulser = styled.div`
  animation: ${Pulse} 1.5s ease-in-out;
  width: 100%;
  height: 1em;
  left: 0;
  position: absolute;
  animation-iteration-count: infinite;
  transform-origin: top left;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.6264880952380952) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const SkeletonLoader = styled.div`
  height: 1em;
  width: 50px;
  background: var(--amino-gray-lightest);
  border-radius: var(--amino-radius);
  position: relative;
`;

export const Skeleton = () => (
  <SkeletonLoader>
    <Pulser />
  </SkeletonLoader>
);
