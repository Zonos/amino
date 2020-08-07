import React from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  hr {
    border: 0;
    border-bottom: var(${AminoTheme.border});
    margin-top: var(${AminoTheme.radius});
    margin-bottom: var(${AminoTheme.radius});
  }
`;
