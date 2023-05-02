import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const SpanStyled = styled.span`
  width: fit-content;
  display: block;
  color: ${theme.gray600};
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  margin-top: -4px;
  margin-bottom: 40px;
`;

export const MdxSubtitle = ({ children }: { children: ReactNode }) => (
  <SpanStyled>{children}</SpanStyled>
);
