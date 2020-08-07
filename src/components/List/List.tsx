import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

export const List = styled.section`
  margin: var(${AminoTheme.spaceNegative});

  & > div {
    border-bottom: var(${AminoTheme.border});
  }

  & > div:last-of-type {
    border-bottom: 0;
    border-bottom-left-radius: var(${AminoTheme.radiusLg});
    border-bottom-right-radius: var(${AminoTheme.radiusLg});
  }
`;
