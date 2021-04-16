import React from 'react';
import styled from 'styled-components';

import { Intent } from '../..';

const AminoNotice = styled.aside`
  border-radius: var(--amino-radius);
  background: var(--amino-gray-100);
  color: var(--amino-text-color);
  padding: var(--amino-space);

  a {
    font-style: italic;
    text-decoration: underline;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  background: var(--amino-success);
  color: white;
`;

const AminoErrorNotice = styled(AminoNotice)`
  background: var(--amino-error);
  color: white;
`;

const AminoWarningNotice = styled(AminoNotice)`
  background: var(--amino-warning);
  color: white;
`;

const AminoPrimaryNotice = styled(AminoNotice)`
  background: var(--amino-primary);
  color: white;
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
