import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { Text, TextStyle } from "../Text";

const AminoListItem = styled.div<{ onClick?: () => void }>`
  padding: var(${AminoTheme.spaceHalf}) var(${AminoTheme.space});
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  h5 {
    margin-bottom: 0;
  }

  &:hover {
    background: ${p => (p.onClick ? `var(${AminoTheme.hoverColor})` : "")};
    cursor: ${p => (p.onClick ? "pointer" : "")};
  }

  &.disabled {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

const Icon = styled.img`
  margin-right: var(${AminoTheme.spaceHalf});
  width: 32px;
  height: 32px;
  border-radius: var(${AminoTheme.radius});
`;

type Props = {
  disabled?: boolean;
  label: string;
  subtitle?: ReactNode;
  icon?: string;
  rightDecorator?: ReactNode;
  iconComponent?: ReactNode;
  onClick?: any;
};

export const ListItem = forwardRef<HTMLDivElement, Props>(
  (
    { disabled, label, subtitle, icon, iconComponent, rightDecorator, onClick },
    ref
  ) => {
    const renderIcon = () => {
      if (icon) {
        return <Icon src={icon} alt={label} />;
      }
      if (iconComponent) {
        return iconComponent;
      }
      return null;
    };
    return (
      <AminoListItem
        className={disabled ? "disabled" : ""}
        onClick={() => !disabled && onClick()}
        ref={ref}
      >
        {renderIcon()}
        <div>
          <Text style={TextStyle.h5}>{label}</Text>
          {subtitle && <Text style={TextStyle.Subtitle}>{subtitle}</Text>}
        </div>
        {rightDecorator}
      </AminoListItem>
    );
  }
);
