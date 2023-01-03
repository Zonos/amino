import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types/Color';
import { Intent } from 'src/types/Intent';
import styled from 'styled-components';

type CSSProps = {
  background?: Color;
  color?: Color;
};

const IconWrapper = styled.div<CSSProps>`
  width: 32px;
  height: 32px;
  background: ${p => (p.background ? theme[p.background] : theme.gray200)};
  color: ${p => (p.color ? theme[p.color] : theme.gray600)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const PrimaryIconWrapper = styled(IconWrapper)`
  background: ${theme.blueL80};
  color: ${theme.blueBase};
`;

const DangerIconWrapper = styled(IconWrapper)`
  background: ${theme.redL80};
  color: ${theme.redBase};
`;

const WarningIconWrapper = styled(IconWrapper)`
  background: ${theme.orangeL80};
  color: ${theme.orangeBase};
`;

export type RoundedIconProps = {
  children: ReactNode;
  className?: string;
  intent?: Intent;
} & CSSProps;

export const RoundedIcon = ({
  background,
  children,
  className,
  color,
  intent,
}: RoundedIconProps) => {
  switch (intent) {
    case 'danger':
      return (
        <DangerIconWrapper className={className}>{children}</DangerIconWrapper>
      );
    case 'primary':
      return (
        <PrimaryIconWrapper className={className}>
          {children}
        </PrimaryIconWrapper>
      );
    case 'warning':
      return (
        <WarningIconWrapper className={className}>
          {children}
        </WarningIconWrapper>
      );
    case 'info':
    case 'secondary':
    default:
      return (
        <IconWrapper
          background={background}
          color={color}
          className={className}
        >
          {children}
        </IconWrapper>
      );
  }
};
