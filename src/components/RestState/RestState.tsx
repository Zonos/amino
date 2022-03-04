import React from 'react';

import styled from 'styled-components';

import { Text } from 'components/Text';

const StyledRestState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    text-align: center;
    max-width: 500px;
  }
`;

const Icon = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: var(--amino-space-half);
`;

const Action = styled.div`
  margin-top: var(--amino-space);
  margin-bottom: var(--amino-space-quarter);
`;

export type RestStateProps = {
  label: string;
  subtitle: string;
  action?: React.ReactNode;
  icon?: string;
};

export const RestState = ({
  label,
  subtitle,
  action,
  icon,
}: RestStateProps) => (
  <StyledRestState>
    {icon ? <Icon src={icon} /> : null}
    <Text type="h4">{label}</Text>
    <Text type="subtitle">{subtitle}</Text>
    {action ? <Action>{action}</Action> : null}
  </StyledRestState>
);
