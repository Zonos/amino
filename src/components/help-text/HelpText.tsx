import type { ReactNode } from 'react';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledHelpText = styled.div`
  margin-top: ${theme.space8};
`;

export type HelpTextProps = {
  /**
   * Is this an error state.
   */
  error?: boolean;
  /**
   * Shows below input. Use in conjunction with `error` to show feedback about error.
   */
  helpText?: ReactNode;
};

export const HelpText = ({ error, helpText }: HelpTextProps) => {
  if (helpText) {
    if (error && typeof helpText === 'string') {
      return (
        <StyledHelpText>
          <Text color="red700" type="caption">
            {helpText}
          </Text>
        </StyledHelpText>
      );
    }

    if (typeof helpText === 'string') {
      return (
        <StyledHelpText>
          <Text type="caption">{helpText}</Text>
        </StyledHelpText>
      );
    }

    return <StyledHelpText>{helpText}</StyledHelpText>;
  }
  return null;
};
