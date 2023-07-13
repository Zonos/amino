import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

export const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.space24};
`;
