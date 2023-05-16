import type { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { Intent } from 'src/types/Intent';
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
  background: ${theme.blue100};
  color: ${theme.blue600};
`;

const DangerIconWrapper = styled(IconWrapper)`
  background: ${theme.red100};
  color: ${theme.red600};
`;

const WarningIconWrapper = styled(IconWrapper)`
  background: ${theme.orange100};
  color: ${theme.orange600};
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
