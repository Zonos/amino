import React from "react";
import styled from "styled-components";

export const MenuItem = styled.li`
  padding: 0 var(--amino-space-quarter);
  height: 32px;
  line-height: 32px;

  &:hover {
    background: var(--amino-hover-color);
  }
`;
