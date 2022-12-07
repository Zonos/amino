import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledSectionInnerWrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.space24};
  align-items: flex-start;
`;

type Props = { className?: string; children: ReactNode };

export const SectionInnerWrapper = ({ className, children }: Props) => (
  <StyledSectionInnerWrapper className={className || ''}>
    {children}
  </StyledSectionInnerWrapper>
);
