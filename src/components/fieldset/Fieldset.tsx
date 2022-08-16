import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

/** @deprecated Please use VStacks instead :) */
export const Fieldset = styled.div`
  .amino-input-wrapper + .amino-input-wrapper {
    margin-top: ${theme.space};
  }
`;
