import React from 'react';
import styled from 'styled-components';

import { HStack } from 'components/Stack';
import { Text } from 'components/Text';
import { IAminoTheme } from 'types';

import { BaseDialog } from './BaseDialog';

const Header = styled.div`
  padding: var(--amino-space);
  border-bottom: var(--amino-border);
  border-top-left-radius: var(--amino-radius-xl);
  border-top-right-radius: var(--amino-radius-xl);
  background: var(--amino-surface-color-secondary);

  h4 {
    margin: 0;
  }
`;

const Footer = styled.div`
  padding: var(--amino-space);
  border-top: var(--amino-border);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--amino-surface-color-secondary);
  border-bottom-left-radius: var(--amino-radius-xl);
  border-bottom-right-radius: var(--amino-radius-xl);

  & > div + div {
    margin-left: var(--amino-space-quarter);
  }
`;

const Content = styled.div`
  padding: var(--amino-space);
  max-height: calc(90vh - (83px * 2));
  overflow-y: auto;
  overscroll-behavior: contain;
`;

export type DialogProps = {
  open: boolean;
  label?: string;
  actions?: React.ReactNode;
  theme?: IAminoTheme;
  children: React.ReactNode;
};

export const Dialog = ({
  theme,
  open,
  label,
  actions,
  children,
}: DialogProps) => (
  <BaseDialog data-theme={theme} open={open}>
    <Header>
      <Text type="h4">{label}</Text>
    </Header>
    <Content>{children}</Content>
    {actions && (
      <Footer>
        <HStack spacing="space-quarter">{actions}</HStack>
      </Footer>
    )}
  </BaseDialog>
);
