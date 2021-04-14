import styled from "styled-components";

export const MenuItem = styled.li`
  padding: 0 var(--amino-space-half);
  height: 42px;
  line-height: 42px;
  user-select: none;
  cursor: default;

  &:hover {
    background: var(--amino-hover-color);
  }

  a {
    width: 100%;
    display: block;
  }
`;
