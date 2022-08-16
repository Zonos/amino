import React, { ReactNode } from 'react';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledHelpText = styled.div`
  margin-top: ${theme.spaceQuarter};
`;

export type HelpTextProps = {
  error?: ReactNode;
  helpText?: ReactNode;
};

export const HelpText = ({ error, helpText }: HelpTextProps) => {
  if (helpText && error && typeof error === 'string') {
    return (
      <StyledHelpText>
        <Text type="caption" color="red-d20">
          {error}
        </Text>
      </StyledHelpText>
    );
  }
  if (helpText && error) {
    return <StyledHelpText>{error}</StyledHelpText>;
  }
  if (helpText && typeof helpText === 'string') {
    return (
      <StyledHelpText>
        <Text type="caption">{helpText}</Text>
      </StyledHelpText>
    );
  }
  if (helpText) {
    return <StyledHelpText>{helpText}</StyledHelpText>;
  }
  return null;
};
