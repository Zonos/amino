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
import styled from 'styled-components';

import { Button } from '../button/Button';

const StyledBanner = styled.div`
  border: ${theme.border};
  border-radius: ${theme.radius6};
  padding: ${theme.space16};
`;

const Container = styled.div<{
  withoutCloseButton: boolean;
}>`
  display: grid;
  align-items: center;
  grid-template-areas:
    'icon header close'
    '. content .';
  grid-template-columns: 32px auto ${p =>
      p.withoutCloseButton ? '0px' : '32px'};
`;

const Icon = styled.div`
  grid-area: icon;
  justify-self: start;
`;

const Close = styled.div`
  grid-area: close;
  justify-self: end;
`;

const CloseButton = styled(Button)`
  && {
    width: 20px;
  }
`;

const Header = styled.div`
  grid-area: header;
`;

const Content = styled.div`
  grid-area: content;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const DefaultBanner = styled(StyledBanner)`
  background: ${theme.grayL80};
  border-color: ${theme.grayL80};
  color: ${theme.grayD40};
`;

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

export type BannerProps = {
  className?: string;
  children?: ReactNode;
  title?: ReactNode;
  footerActions?: ReactNode;
  headerActions?: ReactNode;
  intent?: Intent;
  onClose?: () => void;
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
    const renderTitle = () =>
      title && (
        <BannerHeader>
          <Text type="label">{title}</Text>
          {headerActions && (
            <HStack spacing="space-quarter">{headerActions}</HStack>
          )}
        </BannerHeader>
      );

    const renderFooter = () =>
      footerActions && (
        <BannerFooter>
          <HStack spacing="space-quarter">{footerActions}</HStack>
        </BannerFooter>
      );

    // A hack to make sure the header content (whatever the first non-null is) aligns in it's own row
    const [header, content, moreContent] = [
      renderTitle(),
      children,
      renderFooter(),
    ].filter(Boolean);

    return (
      <Container withoutCloseButton={!onClose}>
        <Icon>{intentIcon}</Icon>
        {onClose && (
          <Close>
            <CloseButton
              intent="text"
              onClick={onClose}
              icon={<RemoveIcon size={20} color={removeIconColor} />}
            />
          </Close>
        )}

        <Header>{header}</Header>

        {content && (
          <Content>
            {content}
            {moreContent}
          </Content>
        )}
      </Container>
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
                color="gray-d80"
                secondaryColor="gray-l40"
                size={20}
              />
            ),
            removeIconColor: 'gray-d40',
          })}
        </DefaultBanner>
      );
  }
};
