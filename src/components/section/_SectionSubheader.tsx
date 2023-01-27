import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Text } from '../text/Text';

const StyledSectionSubheader = styled(Text)`
  margin-top: ${theme.space8};
`;
type Props = { className?: string; children: ReactNode };
export const SectionSubheader = ({ className, children }: Props) => (
  <StyledSectionSubheader
    type="body"
    color="gray800"
    className={className || ''}
  >
    {children}
  </StyledSectionSubheader>
);
