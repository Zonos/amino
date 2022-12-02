import React from 'react';

import { HStack } from 'src/components/stack/HStack';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { SectionHeader } from './_SectionHeader';
import { SectionInnerWrapper } from './_SectionInnerWrapper';
import { SectionSubheader } from './_SectionSubheader';

const StyledSectionWrapper = styled.div`
  margin-bottom: ${theme.spaceDouble};
`;

export type VSectionProps = {
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
};

export const VSection = ({
  actions,
  children,
  className,
  label,
  sublabel = '',
}: VSectionProps) => (
  <StyledSectionWrapper className={className || ''}>
    {label && (
      <SectionInnerWrapper>
        <SectionHeader>
          {label}
          <SectionSubheader>{sublabel}</SectionSubheader>
        </SectionHeader>

        <HStack spacing="space-quarter">{actions}</HStack>
      </SectionInnerWrapper>
    )}
    <div>{children}</div>
  </StyledSectionWrapper>
);
