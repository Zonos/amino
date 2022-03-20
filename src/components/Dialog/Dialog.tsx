import React, { forwardRef } from 'react';

import styled from 'styled-components';

import { HStack } from 'components/Stack';
import { Text } from 'components/Text';
import { RemoveCircleDuotoneIcon } from 'icons';
import { IAminoTheme } from 'types';

import { BaseDialog } from './BaseDialog';

const Header = styled.div`
  padding: var(--amino-space);
  border-top-left-radius: var(--amino-radius-xl);
  border-top-right-radius: var(--amino-radius-xl);
  display: flex;
  align-items: center;

  h4 {
    margin: 0;
    flex: 1;
    font-weight: 700;
  }
`;

const Footer = styled.div`
  padding: var(--amino-space);
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

const Close = styled.div`
  transition: all 100ms ease-in-out;
  background: transparent;
  border-radius: 32px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    svg {
      fill: var(--amino-gray-400);
    }
  }

  svg {
    transition: all 100ms ease-in-out;
  }
`;

export type DialogProps = {
  actions?: React.ReactNode;
  children: React.ReactNode;
  label?: string;
  onClose: () => void;
  open: boolean;
  theme?: IAminoTheme;
  width?: number;
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ actions, children, label, onClose, open, theme, width }, ref) => (
    <BaseDialog data-theme={theme} open={open} width={width}>
      <Header>
        <Text type="h4">{label}</Text>
        <Close onClick={onClose}>
          <RemoveCircleDuotoneIcon color="gray-200" size={20} />
        </Close>
      </Header>
      <Content ref={ref}>{children}</Content>
      {actions && (
        <Footer>
          <HStack spacing="space-quarter">{actions}</HStack>
        </Footer>
      )}
    </BaseDialog>
  )
);
