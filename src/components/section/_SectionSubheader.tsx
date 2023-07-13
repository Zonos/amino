import type { ReactNode } from 'react';

import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

import { Text } from '../text/Text';

const StyledSectionSubheader = styled(Text)`
  margin-top: ${theme.space8};
`;
type Props = { children: ReactNode; className?: string };
export const SectionSubheader = ({ children, className }: Props) => (
  <StyledSectionSubheader
    className={className || ''}
    color="gray800"
    type="body"
  >
    {children}
  </StyledSectionSubheader>
);
