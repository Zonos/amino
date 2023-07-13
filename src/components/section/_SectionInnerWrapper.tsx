import type { ReactNode } from 'react';

import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

const StyledSectionInnerWrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.space24};
  align-items: flex-start;
`;

type Props = { children: ReactNode; className?: string };

export const SectionInnerWrapper = ({ children, className }: Props) => (
  <StyledSectionInnerWrapper className={className || ''}>
    {children}
  </StyledSectionInnerWrapper>
);
