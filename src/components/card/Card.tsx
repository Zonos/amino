import { ReactNode } from 'react';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: ${theme.border};
  border-radius: ${theme.radius6};
  padding: ${theme.space24};
`;

const CardHeader = styled.header`
  margin: ${theme.spaceNegative24};
  padding: ${theme.space24};
  display: flex;
  align-items: center;
  margin-bottom: ${theme.space24};
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
  margin: ${theme.spaceNegative24};
  padding: ${theme.space24};
  border-top: ${theme.border};
  background: ${theme.surfaceColorSecondary};
  margin-top: ${theme.space24};
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
};

export const Card = ({
  actions,
  children,
  className,
  footerActions,
  footerContent,
  footerHeight,
  label,
}: CardProps) => (
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
