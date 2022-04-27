import React from 'react';

import styled from 'styled-components';

import { Color } from '~/src/types/Color';
import { Intent } from '~/src/types/Intent';

type CSSProps = {
  background?: Color;
  color?: Color;
};

const IconWrapper = styled.div<CSSProps>`
  width: 32px;
  height: 32px;
  background: var(
    ${p => (p.background ? `--amino-${p.background}` : '--amino-gray-200')}
  );
  color: var(${p => (p.color ? `--amino-${p.color}` : '--amino-gray-600')});
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
  background: var(--amino-blue-100);
  color: var(--amino-blue-500);
`;

const DangerIconWrapper = styled(IconWrapper)`
  background: var(--amino-red-100);
  color: var(--amino-red-500);
`;

const WarningIconWrapper = styled(IconWrapper)`
  background: var(--amino-orange-100);
  color: var(--amino-orange-500);
`;

export type RoundedIconProps = {
  children: React.ReactNode;
  intent: Intent;
} & CSSProps;

export const RoundedIcon = ({
  background,
  children,
  color,
  intent,
}: RoundedIconProps) => {
  switch (intent) {
    case 'danger':
      return <DangerIconWrapper>{children}</DangerIconWrapper>;
    case 'primary':
      return <PrimaryIconWrapper>{children}</PrimaryIconWrapper>;
    case 'warning':
      return <WarningIconWrapper>{children}</WarningIconWrapper>;
    case 'info':
    case 'secondary':
    default:
      return (
        <IconWrapper background={background} color={color}>
          {children}
        </IconWrapper>
      );
  }
};
