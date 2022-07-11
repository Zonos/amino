import React, { ReactNode } from 'react';

import { SectionLayout } from 'src/types/SectionLayout';
import styled from 'styled-components';

import { HStack } from '../stack/HStack';

const StyledSectionWrapper = styled(HStack)`
  grid-template-columns: 40% 60%;
`;

export const SectioWrapper = ({
  children,
  className,
  layout,
}: {
  children: ReactNode;
  className?: string;
  layout: SectionLayout;
}) =>
  layout === 'vertical' ? (
    <div className={className}>{children}</div>
  ) : (
    <StyledSectionWrapper className={className}>
      {children}
    </StyledSectionWrapper>
  );
