import React from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

export const MenuItem = styled.li`
  padding: 0 var(${AminoTheme.spaceHalf});
  height: 42px;
  line-height: 42px;
  user-select: none;
  cursor: default;

  &:hover {
    background: var(${AminoTheme.hoverColor});
  }

  a {
    width: 100%;
    display: block;
  }
`;
