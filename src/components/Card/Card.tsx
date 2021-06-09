import React from 'react';
import styled from 'styled-components';

import { HStack } from 'components/Stack';
import { Text } from 'components/Text';

import { Depth, Surface } from 'types';

const CardHeader = styled.header`
  margin: var(--amino-space-negative);
  padding: var(--amino-space);
  display: flex;
  align-items: center;
  margin-bottom: var(--amino-space);
  border-bottom: var(--amino-border);
  height: 65px;
  line-height: 65px;
  user-select: none;

  h4 {
    margin-bottom: 0;
    flex: 1;
  }
`;

const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: var(--amino-space-negative);
  padding: var(--amino-space);
  border-top: var(--amino-border);
  background: var(--amino-surface-color-secondary);
  margin-top: var(--amino-space);
  border-bottom-left-radius: var(--amino-radius-lg);
  border-bottom-right-radius: var(--amino-radius-lg);
`;

export type CardProps = {
  actions?: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  footerContent?: React.ReactNode;
  footerActions?: React.ReactNode;
  children: React.ReactNode;
};

export const Card = ({
  actions,
  children,
  className,
  footerContent,
  footerActions,
  label,
}: CardProps) => {
  return (
    <Surface depth={Depth.depth4} className={className || ''}>
      {label && (
        <CardHeader>
          <Text type="h4">{label}</Text>

          <HStack spacing="space-quarter">{actions}</HStack>
        </CardHeader>
      )}
      {children}
      {(footerActions || footerContent) && (
        <CardFooter>
          <div>{footerContent}</div>
          <HStack spacing="space-quarter">{footerActions}</HStack>
        </CardFooter>
      )}
    </Surface>
  );
};
