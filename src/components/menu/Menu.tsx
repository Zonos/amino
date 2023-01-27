import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  hr {
    border: 0;
    border-bottom: ${theme.border};
    margin-top: ${theme.radius6};
    margin-bottom: ${theme.radius6};
  }
`;
