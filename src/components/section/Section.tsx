import React from 'react';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import styled from 'styled-components';

const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  height: 40px;
  line-height: 40px;

  h5 {
    margin-bottom: 0;
    flex: 1;
  }
`;

export type SectionProps = {
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
};

export const Section = ({
  actions,
  children,
  className,
  label,
}: SectionProps) => {
  return (
    <div className={className || ''}>
      {label && (
        <SectionHeader>
          <Text type="xl">{label}</Text>

          <HStack spacing="space-quarter">{actions}</HStack>
        </SectionHeader>
      )}
      {children}
    </div>
  );
};
