import type { ReactNode } from 'react';

import styled from 'styled-components';

import { Text } from 'src/components/text/Text';

const StyledSectionHeader = styled(Text)`
  flex: 1;
  flex-direction: column;
  display: flex;
  flex: auto;
`;

type Props = { children: ReactNode; className?: string };

export const SectionHeader = ({ children, className }: Props) => (
  <StyledSectionHeader className={className || ''} type="title">
    {children}
  </StyledSectionHeader>
);
