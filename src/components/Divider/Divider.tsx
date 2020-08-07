import styled from 'styled-components';

import { AminoTheme } from "../../styles/AminoTheme";

export const Divider = styled.hr`
  margin: var(${AminoTheme.space}) var(${AminoTheme.spaceNegative});
  border-color: var(${AminoTheme.borderColor});
`;
