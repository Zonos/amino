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
    font-weight: base;
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
    color: var(--amino-red-d60);
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
    color: var(--amino-blue-base);
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
    secondaryColor: Color;
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
              color: 'green-l60',
              secondaryColor: 'green-d40',
            })}
          {children}
        </AminoSuccessNotice>
      );
    case 'error':
      return (
        <AminoErrorNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'red-l60',
              secondaryColor: 'red-d60',
            })}
          {children}
        </AminoErrorNotice>
      );
    case 'warning':
      return (
        <AminoWarningNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'yellow-l60',
              secondaryColor: 'yellow-d40',
            })}
          {children}
        </AminoWarningNotice>
      );
    case 'primary':
      return (
        <AminoPrimaryNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'blue-l60',
              secondaryColor: 'blue-base',
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
              color: 'gray-l60',
              secondaryColor: 'gray-base',
            })}
          {children}
        </AminoNotice>
      );
  }
};
