import React from 'react';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { SectionLayout } from 'src/types/SectionLayout';
import styled, { css } from 'styled-components';

import { SectioWrapper } from './_SectionWrapper';

const SectionHeader = styled.header<{ $layout: SectionLayout }>`
  display: flex;
  align-items: center;
  margin-bottom: var(--amino-space-double);
  ${({ $layout }) =>
    $layout === 'horizontal' &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;

const StyledSubheader = styled(Text)`
  color: var(--amino-gray-d40);
  font-style: italic;
  margin-top: var(--amino-space-quarter);
`;

const StyledHeader = styled(Text)<{ $layout: SectionLayout }>`
  flex: 1;
  flex-direction: column;
  display: flex;
  ${({ $layout }) =>
    $layout === 'horizontal' &&
    css`
      flex: auto;
    `}
`;

const StyledSectionWrapper = styled(SectioWrapper)`
  margin-bottom: var(--amino-space-double);
`;

export type SectionProps = {
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  layout?: SectionLayout;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
};

export const Section = ({
  actions,
  children,
  className,
  layout = 'vertical',
  label,
  sublabel = '',
}: SectionProps) => {
  return (
    <StyledSectionWrapper className={className || ''} layout={layout}>
      {label && (
        <SectionHeader $layout={layout}>
          <StyledHeader $layout={layout} type="title">
            {label}
            <StyledSubheader>{sublabel}</StyledSubheader>
          </StyledHeader>

          <HStack spacing="space-quarter">{actions}</HStack>
        </SectionHeader>
      )}
      <div>{children}</div>
    </StyledSectionWrapper>
  );
};
