import type { ReactNode } from 'react';

import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import { Text } from 'src/components/text/Text';
import { CheckCircleDuotoneIcon } from 'src/icons/CheckCircleDuotoneIcon';
import { InfoDuotoneIcon } from 'src/icons/InfoDuotoneIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { WarningDuotoneIcon } from 'src/icons/WarningDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import type { Color, Intent } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';

const StyledBanner = styled.div`
  border-radius: ${theme.radius12};
  padding: ${theme.space16};

  .amino-button {
    &:hover,
    &:focus {
      filter: brightness(1.1);
    }
  }
`;

const Container = styled.div<{
  onlyContent: boolean;
  withoutCloseButton: boolean;
}>`
  display: grid;
  align-items: ${p => (p.onlyContent ? 'start' : 'center')};
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
    width: 24px;
  }
`;

const Header = styled.div<{ color: Color }>`
  grid-area: header;
  color: ${p => theme[p.color]};
`;

const Content = styled.div`
  grid-area: content;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space8};
`;

const BannerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.space12};
`;

const BannerFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: ${theme.space12};
`;

const DefaultBanner = styled(StyledBanner)`
  background: ${theme.gray50};
  color: ${theme.gray700};
  border: 1px solid ${theme.gray100};
`;

const InfoBanner = styled(StyledBanner)`
  background: ${theme.blue100};
  color: ${theme.blue700};
  border: 1px solid ${theme.blue200};
`;

const SuccessBanner = styled(StyledBanner)`
  background: ${theme.green100};
  color: ${theme.green700};
  border: 1px solid ${theme.green200};
`;

const WarningBanner = styled(StyledBanner)`
  background: ${theme.orange100};
  color: ${theme.orange700};
  border: 1px solid ${theme.orange200};
`;

const ErrorBanner = styled(StyledBanner)`
  background: ${theme.red100};
  color: ${theme.red700};
  border: 1px solid ${theme.red200};
`;

export type BannerProps = BaseProps & {
  children?: ReactNode;
  footerActions?: ReactNode;
  headerActions?: ReactNode;
  intent?: Exclude<Intent, 'danger' | 'secondary' | 'primary'>;
  title?: ReactNode;
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
    // Some banners are used with just a wall of text, which causes the icons to be centered vertically in said wall and look a little off. This should handle that edge case and move the icons to align at the top.
    const onlyContent = !!children && !title && !footerActions;

    const renderTitle = () =>
      title && (
        <BannerHeader>
          <Text color={removeIconColor} type="label">
            {title}
          </Text>
          {headerActions && <ActionsWrapper>{headerActions}</ActionsWrapper>}
        </BannerHeader>
      );

    const renderFooter = () =>
      footerActions && (
        <BannerFooter>
          <ActionsWrapper>{footerActions}</ActionsWrapper>
        </BannerFooter>
      );

    // A hack to make sure the header content (whatever the first non-null is) aligns in it's own row
    const [header, content, moreContent] = [
      renderTitle(),
      children,
      renderFooter(),
    ].filter(Boolean);

    return (
      <Container onlyContent={onlyContent} withoutCloseButton={!onClose}>
        <Icon>{intentIcon}</Icon>
        {onClose && (
          <Close>
            <CloseButton
              icon={<RemoveIcon color={removeIconColor} size={20} />}
              onClick={onClose}
              variant="text"
            />
          </Close>
        )}

        <Header color={removeIconColor}>{header}</Header>

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
              <InfoDuotoneIcon
                color="blue800"
                secondaryColor="blue400"
                size={24}
              />
            ),
            removeIconColor: 'blue800',
          })}
        </InfoBanner>
      );
    case 'success':
      return (
        <SuccessBanner className={className}>
          {renderContent({
            intentIcon: (
              <CheckCircleDuotoneIcon
                color="green800"
                secondaryColor="green400"
                size={24}
              />
            ),
            removeIconColor: 'green800',
          })}
        </SuccessBanner>
      );
    case 'warning':
      return (
        <WarningBanner className={className}>
          {renderContent({
            intentIcon: (
              <WarningDuotoneIcon
                color="orange800"
                secondaryColor="orange400"
                size={24}
              />
            ),
            removeIconColor: 'orange800',
          })}
        </WarningBanner>
      );
    case 'error':
      return (
        <ErrorBanner className={className}>
          {renderContent({
            intentIcon: (
              <RemoveCircleDuotoneIcon
                color="red800"
                secondaryColor="red400"
                size={24}
              />
            ),
            removeIconColor: 'red800',
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
                color="gray800"
                secondaryColor="gray400"
                size={24}
              />
            ),
            removeIconColor: 'gray800',
          })}
        </DefaultBanner>
      );
  }
};
