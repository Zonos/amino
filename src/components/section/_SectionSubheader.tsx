import React, { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Text } from '../text/Text';

const StyledSectionSubheader = styled(Text)`
  color: ${theme.grayD40};
  font-style: italic;
  margin-top: ${theme.spaceQuarter};
`;
type Props = { className?: string; children: ReactNode };
export const SectionSubheader = ({ className, children }: Props) => (
  <StyledSectionSubheader className={className || ''}>
    {children}
  </StyledSectionSubheader>
);
