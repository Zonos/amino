import React from "react";
import styled from "styled-components";

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  hr {
    border: 0;
    border-bottom: 1px solid var(--amino-border-color);
    margin-top: var(--amino-radius);
    margin-bottom: var(--amino-radius);
  }
`;
