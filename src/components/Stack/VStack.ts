import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

export const VStack = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: var(${AminoTheme.space});
`;
