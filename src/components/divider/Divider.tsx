import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export const Divider = styled.hr`
  margin: ${theme.space} ${theme.spaceNegative};
  border-color: ${theme.borderColor};
`;
