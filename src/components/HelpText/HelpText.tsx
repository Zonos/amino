import React, { ReactNode } from 'react';

import { Text } from 'src/components/Text';
import styled from 'styled-components';

const StyledHelpText = styled.div`
  margin-top: var(--amino-space-quarter);
`;

const Error = styled.div`
  color: var(--amino-red-600);
`;

const StyledSubTitle = styled(Text)`
  font-style: normal;
`;

export type HelpTextProps = {
  error?: ReactNode;
  helpText?: ReactNode;
};

export const HelpText = ({ error, helpText }: HelpTextProps) => {
  if (helpText && error && typeof error === 'string') {
    return (
      <StyledHelpText>
        <Error>
          <StyledSubTitle type="subtitle">{error}</StyledSubTitle>
        </Error>
      </StyledHelpText>
    );
  }
  if (helpText && error) {
    return <StyledHelpText>{error}</StyledHelpText>;
  }
  if (helpText && typeof helpText === 'string') {
    return (
      <StyledHelpText>
        <StyledSubTitle type="subtitle">{helpText}</StyledSubTitle>
      </StyledHelpText>
    );
  }
  if (helpText) {
    return <StyledHelpText>{helpText}</StyledHelpText>;
  }
  return null;
};
