import { Spacing } from '@mui/system';
import { ReactNode } from 'react';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledCard = styled.div<{ spacing?: string }>`
  border: ${theme.border};
  border-radius: ${theme.radius6};
  padding: ${({ spacing }) => (spacing ? spacing : theme.space24)};

  /** Dividers should stretch the whole width by default */
  hr {
    margin-left: ${({ spacing }) =>
      spacing ? `calc(${spacing} * -1)` : theme.spaceNegative24};
    margin-right: ${({ spacing }) =>
      spacing ? `calc(${spacing} * -1)` : theme.spaceNegative24};
  }
`;

const CardHeader = styled.header<{ spacing?: string }>`
  margin: ${({ spacing }) =>
    spacing ? `calc(${spacing} * -1)` : theme.spaceNegative24};
  padding: ${({ spacing }) => (spacing ? spacing : theme.space24)};
  display: flex;
  align-items: center;
  margin-bottom: ${({ spacing }) => (spacing ? spacing : theme.space24)};
  border-bottom: ${theme.border};
  height: 65px;
  line-height: 65px;
  user-select: none;

  h5 {
    margin-bottom: 0;
    flex: 1;
  }
`;

const CardFooter = styled.footer<{ footerHeight?: number; spacing?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ spacing }) =>
    spacing ? `calc(${spacing} * -1)` : theme.spaceNegative24};
  padding: ${({ spacing }) => (spacing ? spacing : theme.space24)};
  border-top: ${theme.border};
  background: ${theme.surfaceColorSecondary};
  margin-top: ${({ spacing }) => (spacing ? spacing : theme.space24)};
  border-bottom-left-radius: ${theme.radius8};
  border-bottom-right-radius: ${theme.radius8};
  height: ${p => p.footerHeight && `${p.footerHeight}px`};
`;

export type CardProps = {
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
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
  <StyledCard spacing={spacing} className={className || ''}>
    {label && (
      <CardHeader spacing={spacing}>
        <Text type="subheader">{label}</Text>

        <HStack spacing="space-quarter">{actions}</HStack>
      </CardHeader>
    )}
    {children}
    {(footerActions || footerContent) && (
      <CardFooter footerHeight={footerHeight} spacing={spacing}>
        <div>{footerContent}</div>
        <HStack spacing="space-quarter">{footerActions}</HStack>
      </CardFooter>
    )}
  </StyledCard>
);
