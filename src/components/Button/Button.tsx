import React from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { Spinner } from "../Spinner";
import { AminoOnClickHandler } from "../..";

// TODO: strong typing for Styled buttons

const AminoButton = styled.button<any>`
  position: relative;
  outline: none;
  border: var(${AminoTheme.borderTransparent});
  height: 40px;
  line-height: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 var(${AminoTheme.space});
  border-radius: var(${AminoTheme.radius});
  transition: var(${AminoTheme.transition});
  box-shadow: var(${AminoTheme.shadowSmall});
  font-weight: 500;
  user-select: none;
  font-family: var(${AminoTheme.fontSans});
  letter-spacing: normal;

  &:active,
  &:focus {
    outline: none;
    border: var(${AminoTheme.borderBlue});
    box-shadow: var(${AminoTheme.glowBlue});
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
    opacity: .5;
  }
`;

const Primary = styled(AminoButton)<any>`
  background: var(${AminoTheme.primary});
  color: var(${AminoTheme.textLight});

  &:hover {
    background: var(${AminoTheme.primaryLight});
  }
`;

const Secondary = styled(AminoButton)<any>`
  background: white;
  color: var(${AminoTheme.textDark});
  border: var(${AminoTheme.border});
  background: var(${AminoTheme.inputBackground});

  &:hover {
    background: var(${AminoTheme.hoverColor});
  }
`;

const Icon = styled(AminoButton)<any>`
  background: white;
  color: var(${AminoTheme.textColor});
  border: var(${AminoTheme.border});
  padding: 0 var(${AminoTheme.spaceHalf});

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: var(${AminoTheme.hoverColor});
  }

  &:active {
    border: 2px solid var(${AminoTheme.primary});
    padding: 0 calc(var(${AminoTheme.spaceHalf}) - 1px);
  }
`;

const Danger = styled(AminoButton)<any>`
  background: var(${AminoTheme.error});
  color: white;

  &:hover {
    background: var(${AminoTheme.red300});
  }

  &:active,
  &:focus {
    border: var(${AminoTheme.borderRed});
    box-shadow: var(${AminoTheme.glowRed});
  }
`;

// TODO: use Intent enum like old amino, not strings

type Props = {
  intent?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: AminoOnClickHandler;
  className?: string;
  loadingText?: string;
};

export const Button: React.FC<Props> = ({
  disabled,
  children,
  intent,
  loading,
  onClick,
  className,
  loadingText
}) => {
  const content = loading ? <><Spinner size={16} />{loadingText && loadingText}</> : children;

  if (disabled || loading) {
    return <Secondary disabled>{content}</Secondary>;
  }

  const buttonProps = {
    onClick: onClick || null,
    className: className || null
  };

  switch (intent) {
    case "primary":
      return <Primary {...buttonProps}>{content}</Primary>;
    case "danger":
      return <Danger {...buttonProps}>{content}</Danger>;
    case "icon":
      return <Icon {...buttonProps}>{content}</Icon>;
    case "secondary":
    default:
      return <Secondary {...buttonProps}>{content}</Secondary>;
  }
};
