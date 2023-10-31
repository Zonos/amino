import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import { theme } from 'src/styles/constants/theme';

/**
 * A Button that is just an icon.
 */
export const ButtonIcon = styled(Button)`
  padding: 0;
  path[data-is-secondary-color] {
    fill: ${theme.gray200};
  }

  && {
    &,
    &:focus,
    &:hover,
    &:active {
      color: ${theme.gray800};
      background: transparent;
    }
    &:hover {
      path[data-is-secondary-color] {
        fill: ${theme.gray300};
      }
    }
    &:active,
    &:focus {
      path[data-is-secondary-color] {
        fill: ${theme.gray400};
      }
    }
  }
`;
