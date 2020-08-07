import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

export const Fieldset = styled.div`
  .amino-input-wrapper + .amino-input-wrapper {
    margin-top: var(${AminoTheme.space});
  }
`;
