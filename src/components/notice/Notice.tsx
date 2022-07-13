import React from 'react';

import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { Color } from 'src/types';
import { Intent } from 'src/types/Intent';
import styled from 'styled-components';

import { Button } from '../button/Button';

const AminoNotice = styled.div`
  background: var(--amino-gray-100);
  border-radius: var(--amino-radius);
  color: var(--amino-text-color);
  padding: var(--amino-space-half);
  display: flex;
  align-items: center;

  &,
  & > * {
    font-weight: 500;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  background: var(--amino-green-100);
  &,
  & > * {
    color: var(--amino-success-dark);
  }
`;

const AminoErrorNotice = styled(AminoNotice)`
  background: var(--amino-red-100);
  &,
  & > * {
    color: var(--amino-red-700);
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
  onClose?: () => void;
};

export const Notice = ({
  className,
  intent,
  children,
  onClose,
}: NoticeProps) => {
  const renderCloseButton = ({
    color,
    secondaryColor,
  }: {
    color: Color;
    secondaryColor: string;
  }) => {
    return (
      <Button
        intent="text"
        onClick={onClose}
        icon={
          <RemoveCircleDuotoneIcon
            size={20}
            color={color}
            secondaryColor={secondaryColor}
          />
        }
      />
    );
  };
  switch (intent) {
    case 'success':
      return (
        <AminoSuccessNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'green-200',
              secondaryColor: 'var(--amino-green-600)',
            })}
          {children}
        </AminoSuccessNotice>
      );
    case 'error':
      return (
        <AminoErrorNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'red-200',
              secondaryColor: 'var(--amino-red-700)',
            })}
          {children}
        </AminoErrorNotice>
      );
    case 'warning':
      return (
        <AminoWarningNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'yellow-200',
              secondaryColor: 'var(--amino-yellow-600)',
            })}
          {children}
        </AminoWarningNotice>
      );
    case 'primary':
      return (
        <AminoPrimaryNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'blue-200',
              secondaryColor: 'var(--amino-blue-500)',
            })}
          {children}
        </AminoPrimaryNotice>
      );
    case 'info':
    default:
      return (
        <AminoNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'gray-200',
              secondaryColor: 'var(--amino-gray-500)',
            })}
          {children}
        </AminoNotice>
      );
  }
};
