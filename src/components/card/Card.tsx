import React from 'react';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: ${theme.border};
  border-radius: ${theme.radius};
  padding: ${theme.space};
`;

const CardHeader = styled.header`
  margin: ${theme.spaceNegative};
  padding: ${theme.space};
  display: flex;
  align-items: center;
  margin-bottom: ${theme.space};
  border-bottom: ${theme.border};
  height: 65px;
  line-height: 65px;
  user-select: none;

  h5 {
    margin-bottom: 0;
    flex: 1;
  }
`;

const CardFooter = styled.footer<{ footerHeight?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${theme.spaceNegative};
  padding: ${theme.space};
  border-top: ${theme.border};
  background: ${theme.surfaceColorSecondary};
  margin-top: ${theme.space};
  border-bottom-left-radius: ${theme.radiusLg};
  border-bottom-right-radius: ${theme.radiusLg};
  height: ${p => p.footerHeight && `${p.footerHeight}px`};
`;

export type CardProps = {
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  footerActions?: React.ReactNode;
  footerContent?: React.ReactNode;
  footerHeight?: number;
  label?: React.ReactNode;
};

export const Card = ({
  actions,
  children,
  className,
  footerActions,
  footerContent,
  footerHeight,
  label,
}: CardProps) => {
  return (
    <StyledCard className={className || ''}>
      {label && (
        <CardHeader>
          <Text type="subheader">{label}</Text>

          <HStack spacing="space-quarter">{actions}</HStack>
        </CardHeader>
      )}
      {children}
      {(footerActions || footerContent) && (
        <CardFooter footerHeight={footerHeight}>
          <div>{footerContent}</div>
          <HStack spacing="space-quarter">{footerActions}</HStack>
        </CardFooter>
      )}
    </StyledCard>
  );
};
