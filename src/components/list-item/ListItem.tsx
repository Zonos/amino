import React, { forwardRef, ReactNode } from 'react';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled, { css } from 'styled-components';

interface AminoListItemProps {
  withClick?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

const AminoListItem = styled.div<AminoListItemProps>`
  padding: ${theme.spaceQuarter} ${theme.spaceHalf};
  display: flex;
  flex-direction: row;
  gap: ${theme.spaceHalf};
  align-items: center;
  min-height: ${theme.sizeXl};
  border-radius: ${theme.radiusLg};
  line-height: 16px;

  .___icon-wrapper {
    display: none;
    &.has-icon {
      display: inline-block;
    }
  }

  ${({ selected, disabled }) =>
    !disabled &&
    selected &&
    css`
      background-color: ${theme.blueL80};
      color: ${theme.blueD40};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${theme.grayBase};
      cursor: not-allowed;
    `}

  :hover {
    ${({ disabled, withClick, selected }) =>
      !disabled &&
      withClick &&
      !selected &&
      css`
        background-color: ${theme.grayL80};
        cursor: pointer;
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
  margin-right: ${theme.spaceHalf};
  width: 32px;
  height: 32px;
  border-radius: ${theme.radius};
`;

export type Props = {
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  label: ReactNode;
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
      className,
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
  ) => (
    <AminoListItem
      className={className}
      disabled={disabled}
      selected={selected}
      withClick={!!onClick}
      onClick={e => !disabled && onClick && onClick(e)}
      ref={ref}
    >
      <div
        className={[
          '___icon-wrapper',
          icon || iconComponent || decorator ? 'has-icon' : '',
        ].join(' ')}
      >
        {decorator}
        <ListIcon
          label={typeof label === 'string' ? label : ''}
          icon={icon}
          iconComponent={iconComponent}
        />
      </div>

      <TextContainer>
        <Text type="label">{label}</Text>
        {subtitle && <Text type="caption">{subtitle}</Text>}
      </TextContainer>
      {rightDecorator}
    </AminoListItem>
  )
);
