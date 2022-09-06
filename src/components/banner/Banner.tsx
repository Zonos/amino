import React, { ReactNode } from 'react';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { CheckCircleDuotoneIcon } from 'src/icons/CheckCircleDuotoneIcon';
import { InfoDuotoneIcon } from 'src/icons/InfoDuotoneIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { WarningDuotoneIcon } from 'src/icons/WarningDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import { Color, Intent } from 'src/types';
import styled, { css } from 'styled-components';

import { Button } from '../button/Button';
import { VStack } from '../stack/VStack';

const StyledBanner = styled.div`
  border: ${theme.border};
  border-radius: ${theme.radius};
  padding: 13px 0 13px 13px;
`;

const StyledHStack = styled(HStack)<{ shouldAlignCenter: boolean }>`
  grid-template-columns: 48px 1fr 36px;
  ${p =>
    p.shouldAlignCenter &&
    css`
      align-items: center;
    `}
`;

const DefaultBanner = styled(StyledBanner)``;

const InfoBanner = styled(StyledBanner)`
  background: ${theme.blueL80};
  border-color: ${theme.blueL80};
  color: ${theme.blueD40};
`;

const SuccessBanner = styled(StyledBanner)`
  background: ${theme.greenL80};
  border-color: ${theme.greenL80};
  color: ${theme.greenD40};
`;

const WarningBanner = styled(StyledBanner)`
  background: ${theme.orangeL80};
  border-color: ${theme.orangeL80};
  color: ${theme.orangeD40};
`;

const ErrorBanner = styled(StyledBanner)`
  background: ${theme.redL80};
  border-color: ${theme.redL80};
  color: ${theme.redD40};
`;

const BannerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BannerFooter = styled.footer`
  display: flex;
  align-items: center;
`;

export type BannerProps = {
  children?: ReactNode;
  className?: string;
  footerActions?: ReactNode;
  headerActions?: ReactNode;
  intent?: Intent;
  onClose?: () => void;
  title?: ReactNode;
};

export const Banner = ({
  children,
  className = '',
  footerActions,
  headerActions,
  intent,
  onClose,
  title,
}: BannerProps) => {
  const renderContent = ({
    intentIcon,
    removeIconColor,
  }: {
    intentIcon: ReactNode;
    removeIconColor: Color;
  }) => {
    const shouldAlignCenter =
      [children, title, footerActions].filter(Boolean).length === 1;
    return (
      <StyledHStack shouldAlignCenter={shouldAlignCenter}>
        {intentIcon}

        <VStack spacing="space-quarter">
          {title && (
            <BannerHeader>
              {title && (
                <Text type="bold-label" fontWeight="500">
                  {title}
                </Text>
              )}
              {headerActions && (
                <HStack spacing="space-quarter">{headerActions}</HStack>
              )}
            </BannerHeader>
          )}
          {children}
          {footerActions && (
            <BannerFooter>
              <HStack spacing="space-quarter">{footerActions}</HStack>
            </BannerFooter>
          )}
        </VStack>

        {onClose && (
          <Button
            intent="text"
            onClick={onClose}
            icon={<RemoveIcon size={20} color={removeIconColor} />}
          />
        )}
      </StyledHStack>
    );
  };
  switch (intent) {
    case 'info':
      return (
        <InfoBanner className={className}>
          {renderContent({
            intentIcon: (
              <CheckCircleDuotoneIcon
                color="blue-d80"
                secondaryColor="blue-l40"
                size={20}
              />
            ),
            removeIconColor: 'blue-d40',
          })}
        </InfoBanner>
      );
    case 'success':
      return (
        <SuccessBanner className={className}>
          {renderContent({
            intentIcon: (
              <CheckCircleDuotoneIcon
                color="green-d80"
                secondaryColor="green-l40"
                size={20}
              />
            ),
            removeIconColor: 'green-d40',
          })}
        </SuccessBanner>
      );
    case 'warning':
      return (
        <WarningBanner className={className}>
          {renderContent({
            intentIcon: (
              <WarningDuotoneIcon
                color="orange-d80"
                secondaryColor="orange-l40"
                size={20}
              />
            ),
            removeIconColor: 'orange-d40',
          })}
        </WarningBanner>
      );
    case 'error':
      return (
        <ErrorBanner className={className}>
          {renderContent({
            intentIcon: (
              <RemoveCircleDuotoneIcon
                color="red-d80"
                secondaryColor="red-l40"
                size={20}
              />
            ),
            removeIconColor: 'red-d40',
          })}
        </ErrorBanner>
      );
    case 'default':
    default:
      return (
        <DefaultBanner className={className}>
          {renderContent({
            intentIcon: (
              <InfoDuotoneIcon
                color="gray-d60"
                secondaryColor="gray-l60"
                size={20}
              />
            ),
            removeIconColor: 'gray-d40',
          })}
        </DefaultBanner>
      );
  }
};
