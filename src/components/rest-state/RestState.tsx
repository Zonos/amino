import type { ReactNode } from 'react';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

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
  margin-bottom: ${theme.space16};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.space8};
`;

const Action = styled.div`
  margin-top: ${theme.space24};
  margin-bottom: ${theme.space8};
`;

export type RestStateProps = {
  action?: ReactNode;
  className?: string;
  icon?: string;
  label: string;
  subtitle?: string;
};

export const RestState = ({
  action,
  className,
  icon,
  label,
  subtitle,
}: RestStateProps) => (
  <StyledRestState className={className}>
    {icon ? <Icon src={icon} /> : null}
    <TextWrapper>
      <Text type="title">{label}</Text>
      {subtitle && <Text type="subtitle">{subtitle}</Text>}
      {action ? <Action>{action}</Action> : null}
    </TextWrapper>
  </StyledRestState>
);
