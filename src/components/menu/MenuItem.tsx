import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export const MenuItem = styled.li`
  padding: 0 ${theme.spaceHalf};
  height: 42px;
  line-height: 42px;
  user-select: none;
  cursor: default;

  &:hover {
    background: ${theme.hoverColor};
  }

  a {
    width: 100%;
    display: block;
  }
`;
