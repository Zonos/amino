import React from 'react';

import { Intent } from 'src/types/Intent';
import styled from 'styled-components';

const AminoNotice = styled.aside`
  background: var(--amino-gray-100);
  border-radius: var(--amino-radius);
  color: var(--amino-text-color);
  padding: var(--amino-space);

  &,
  & > * {
    font-weight: 500;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  background: var(--amino-success);
  &,
  & > * {
    color: var(--amino-success-dark);
  }
`;

const AminoErrorNotice = styled(AminoNotice)`
  background: var(--amino-red-200);
  &,
  & > * {
    color: var(--amino-danger);
  }
`;

const AminoWarningNotice = styled(AminoNotice)`
  background: var(--amino-warning);
  &,
  & > * {
    color: var(--amino-warning-dark);
  }
`;

const AminoPrimaryNotice = styled(AminoNotice)`
  background: var(--amino-blue-100);
  &,
  & > * {
    color: var(--amino-blue-500);
  }
`;

export type NoticeProps = {
  children: React.ReactNode;
  className?: string;
  intent?: Intent;
};

export const Notice = ({ className, intent, children }: NoticeProps) => {
  switch (intent) {
    case 'success':
      return (
        <AminoSuccessNotice className={className}>
          {children}
        </AminoSuccessNotice>
      );
    case 'error':
      return (
        <AminoErrorNotice className={className}>{children}</AminoErrorNotice>
      );
    case 'warning':
      return (
        <AminoWarningNotice className={className}>
          {children}
        </AminoWarningNotice>
      );
    case 'primary':
      return (
        <AminoPrimaryNotice className={className}>
          {children}
        </AminoPrimaryNotice>
      );
    case 'info':
    default:
      return <AminoNotice className={className}>{children}</AminoNotice>;
  }
};
