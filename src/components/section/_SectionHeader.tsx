import { ReactNode } from 'react';

import styled from 'styled-components';

import { Text } from '../text/Text';

const StyledSectionHeader = styled(Text)`
  flex: 1;
  flex-direction: column;
  display: flex;
  flex: auto;
`;

type Props = { className?: string; children: ReactNode };

export const SectionHeader = ({ className, children }: Props) => (
  <StyledSectionHeader className={className || ''} type="title">
    {children}
  </StyledSectionHeader>
);
