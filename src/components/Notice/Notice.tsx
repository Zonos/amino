import React from 'react';
import styled from 'styled-components';

import { Intent } from '../..';

const AminoNotice = styled.aside`
  background: var(--amino-gray-100);
  border-radius: var(--amino-radius);
  color: var(--amino-text-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  intent?: Intent;
  children: React.ReactNode;
};

export const Notice = ({ intent, children }: NoticeProps) => {
  switch (intent) {
    case 'success':
      return <AminoSuccessNotice>{children}</AminoSuccessNotice>;
    case 'error':
      return <AminoErrorNotice>{children}</AminoErrorNotice>;
    case 'warning':
      return <AminoWarningNotice>{children}</AminoWarningNotice>;
    case 'primary':
      return <AminoPrimaryNotice>{children}</AminoPrimaryNotice>;
    case 'info':
    default:
      return <AminoNotice>{children}</AminoNotice>;
  }
};
