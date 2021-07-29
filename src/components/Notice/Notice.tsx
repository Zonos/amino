import { TextAvatar } from 'components/TextAvatar';
import React from 'react';
import styled from 'styled-components';

import { Text } from '../Text';

import { Intent } from '../..';

const AminoNotice = styled.aside`
  background: var(--amino-gray-100);
  border-radius: var(--amino-radius);
  color: var(--amino-text-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--amino-space);

  h5 {
    font-weight: 500;
  }
  a {
    font-weight: 500;
    text-align: right;
    text-decoration: underline;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  background: var(--amino-success);
  h5,
  a {
    color: var(--amino-success-dark);
  }
`;

const AminoErrorNotice = styled(AminoNotice)`
  background: var(--amino-red-200);
  h5,
  a {
    color: var(--amino-danger);
  }
`;

const AminoWarningNotice = styled(AminoNotice)`
  background: var(--amino-warning);

  h5,
  a {
    color: var(--amino-warning-dark);
  }
`;

const AminoPrimaryNotice = styled(AminoNotice)`
  background: var(--amino-blue-100);
  h5,
  a {
    color: var(--amino-blue-500);
  }
`;

export type NoticeProps = {
  intent?: 'success' | 'error' | 'warning' | 'primary' | 'info';
  hRef?: string;
  noticeText: string;
};

export const Notice = ({ hRef, intent, noticeText }: NoticeProps) => {
  switch (intent) {
    case 'success':
      return (
        <AminoSuccessNotice>
          <Text type="h5">{noticeText}</Text>
          {hRef && (
            <a
              href={hRef}
              className="no-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read More...
            </a>
          )}
        </AminoSuccessNotice>
      );
    case 'error':
      return (
        <AminoErrorNotice>
          <Text type="h5">{noticeText}</Text>
          {hRef && (
            <a
              href={hRef}
              className="no-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read More...
            </a>
          )}
        </AminoErrorNotice>
      );
    case 'warning':
      return (
        <AminoWarningNotice>
          <Text type="h5">{noticeText}</Text>
          {hRef && (
            <a
              href={hRef}
              className="no-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read More...
            </a>
          )}
        </AminoWarningNotice>
      );
    case 'primary':
      return (
        <AminoPrimaryNotice>
          <Text type="h5">{noticeText}</Text>
          {hRef && (
            <a
              href={hRef}
              className="no-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read More...
            </a>
          )}
        </AminoPrimaryNotice>
      );
    case 'info':
    default:
      return (
        <AminoNotice>
          <Text type="h5">{noticeText}</Text>
          {hRef && (
            <a
              href={hRef}
              className="no-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read More...
            </a>
          )}
        </AminoNotice>
      );
  }
};
