import React from "react";
import styled from "styled-components";

export const MenuItem = styled.li`
  padding: 0 var(--amino-space-half);
  height: 42px;
  line-height: 42px;

  &:hover {
    background: var(--amino-hover-color);
  }
`;
