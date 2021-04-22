import React from 'react';
import styled from 'styled-components';

import { Intent } from '../..';

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background: var(--amino-gray-200);
  color: var(--amino-gray-600);
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
  background: var(--amino-blue-200);
  color: var(--amino-blue-600);
`;

const DangerIconWrapper = styled(IconWrapper)`
  background: var(--amino-red-200);
  color: var(--amino-red-500);
`;

export type RoundedIconProps = {
  children: React.ReactNode;
  intent: Intent;
};

export const RoundedIcon = ({ children, intent }: RoundedIconProps) => {
  switch (intent) {
    case 'danger':
      return <DangerIconWrapper>{children}</DangerIconWrapper>;
    case 'primary':
      return <PrimaryIconWrapper>{children}</PrimaryIconWrapper>;
    case 'info':
    case 'secondary':
    default:
      return <IconWrapper>{children}</IconWrapper>;
  }
};
