import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.space24};
`;
