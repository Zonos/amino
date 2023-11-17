import type { ReactNode } from 'react';

import styled from 'styled-components';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

const StyledCard = styled.div<{ $spacing?: string }>`
  border: ${theme.border};
  border-radius: ${theme.radius6};
  padding: ${p => p.$spacing || theme.space24};
  background: ${theme.gray0};

  /** Dividers should stretch the whole width by default */
  hr {
    margin-left: ${p =>
      p.$spacing ? `calc(${p.$spacing} * -1)` : theme.spaceNegative24};
    margin-right: ${p =>
      p.$spacing ? `calc(${p.$spacing} * -1)` : theme.spaceNegative24};
  }
`;

const CardHeader = styled.div<{ $spacing?: string }>`
  margin: ${p =>
    p.$spacing ? `calc(${p.$spacing} * -1)` : theme.spaceNegative24};
  padding: ${p => p.$spacing || theme.space24};
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.$spacing || theme.space24};
  border-bottom: ${theme.border};
  height: 65px;
  line-height: 65px;
  user-select: none;

  h5 {
    margin-bottom: 0;
    flex: 1;
  }
`;

const CardFooter = styled.div<{ $footerHeight?: number; $spacing?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${p =>
    p.$spacing ? `calc(${p.$spacing} * -1)` : theme.spaceNegative24};
  padding: ${p => p.$spacing || theme.space24};
  border-top: ${theme.border};
  background: ${theme.surfaceColorSecondary};
  margin-top: ${p => p.$spacing || theme.space24};
  border-bottom-left-radius: ${theme.radius8};
  border-bottom-right-radius: ${theme.radius8};
  height: ${p => p.$footerHeight && `${p.$footerHeight}px`};
`;

export type CardProps = BaseProps & {
  actions?: ReactNode;
  children: ReactNode;
  footerActions?: ReactNode;
  footerContent?: ReactNode;
  footerHeight?: number;
  label?: ReactNode;
  spacing?: string;
};

export const Card = ({
  actions,
  children,
  className,
  footerActions,
  footerContent,
  footerHeight,
  label,
  spacing = theme.space24,
}: CardProps) => (
  <StyledCard $spacing={spacing} className={className || ''}>
    {label && (
      <CardHeader $spacing={spacing}>
        <Text type="subheader">{label}</Text>

        <HStack spacing={8}>{actions}</HStack>
      </CardHeader>
    )}
    {children}
    {(footerActions || footerContent) && (
      <CardFooter $footerHeight={footerHeight} $spacing={spacing}>
        <div>{footerContent}</div>
        <HStack spacing={8}>{footerActions}</HStack>
      </CardFooter>
    )}
  </StyledCard>
);
