import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";

const AminoListItem = styled.div<{ onClick?: () => void }>`
  padding: var(--amino-space-half) var(--amino-space);
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
    background: ${(p) => (p.onClick ? `var(--amino-hover-color)` : "")};
    cursor: ${(p) => (p.onClick ? "pointer" : "")};
  }

  &.disabled {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

const Icon = styled.img`
  margin-right: var(--amino-space-half);
  width: 32px;
  height: 32px;
  border-radius: var(--amino-radius);
`;

type Props = {
  disabled?: boolean;
  label: string;
  subtitle?: ReactNode;
  icon?: string;
  rightDecorator?: ReactNode;
  iconComponent?: ReactNode;
  onClick?: () => void;
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
        onClick={() => !disabled && onClick && onClick()}
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
