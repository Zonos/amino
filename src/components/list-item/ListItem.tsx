import React, { forwardRef, ReactNode } from 'react';

import { Text } from 'src/components/text/Text';
import styled, { css } from 'styled-components';

interface AminoListItemProps {
  withClick?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

const AminoListItem = styled.div<AminoListItemProps>`
  padding: var(--amino-space-quarter) var(--amino-space-half);
  display: flex;
  flex-direction: row;
  gap: var(--amino-space-half);
  align-items: center;
  min-height: var(--amino-size-xl);
  border-radius: var(--amino-radius-lg);
  line-height: 16px;

  & .item-label {
    font-weight: 500;
    font-size: 14px;
  }

  & .item-subtitle {
    font-weight: 400;
    color: var(--amino-gray-d40);
    font-size: 12px;
  }

  ${({ selected, disabled }) =>
    !disabled &&
    selected &&
    css`
      background-color: var(--amino-blue-l80);
      color: var(--amino-blue-d40);

      & .item-subtitle {
        color: var(--amino-blue-d20);
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--amino-gray-base);

      & .item-subtitle {
        color: var(--amino-gray-l20);
      }
    `}

  :hover {
    ${({ disabled, withClick }) =>
      !disabled &&
      withClick &&
      css`
        background-color: var(--amino-gray-l80);
        cursor: pointer;
      `}

    ${({ disabled, withClick }) =>
      disabled &&
      withClick &&
      css`
        cursor: not-allowed;
      `}
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex-grow: 1;
`;

const Icon = styled.img`
  margin-right: var(--amino-space-half);
  width: 32px;
  height: 32px;
  border-radius: var(--amino-radius);
`;

export type Props = {
  disabled?: boolean;
  selected?: boolean;
  label: string;
  subtitle?: ReactNode;
  rightDecorator?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** @description Decorater takes a React node, preferably an icon or an avatar */
  decorator?: ReactNode;
  /** @deprecated use decorator instead */
  icon?: string;
  /** @deprecated use decorator instead */
  iconComponent?: ReactNode;
};

const ListIcon = ({
  icon,
  iconComponent,
  label,
}: {
  icon?: string;
  iconComponent?: ReactNode;
  label: string;
}) => {
  if (icon) {
    return <Icon src={icon} alt={label} />;
  }
  if (iconComponent) {
    return <>{iconComponent}</>;
  }
  return null;
};

export const ListItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      disabled,
      decorator,
      selected,
      label,
      subtitle,
      rightDecorator,
      onClick,
      icon,
      iconComponent,
    },
    ref
  ) => {
    return (
      <AminoListItem
        disabled={disabled}
        selected={selected}
        withClick={!!onClick}
        onClick={!disabled ? undefined : onClick}
        ref={ref}
      >
        {decorator}
        <ListIcon label={label} icon={icon} iconComponent={iconComponent} />
        <TextContainer>
          <Text className="item-label">{label}</Text>
          {subtitle && <Text className="item-subtitle">{subtitle}</Text>}
        </TextContainer>
        {rightDecorator}
      </AminoListItem>
    );
  }
);
