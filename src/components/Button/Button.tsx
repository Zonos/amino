import React, { ReactNode } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import { AminoTheme } from "../../styles/AminoTheme";
import { Spinner } from "../Spinner";

const AminoButton = styled.button`
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
    opacity: 0.5;
  }
`;

const Primary = styled(AminoButton)`
  background: var(${AminoTheme.primary});
  color: var(${AminoTheme.textLight});

  &:hover {
    background: var(${AminoTheme.primaryLight});
  }
`;

const Secondary = styled(AminoButton)`
  background: white;
  color: var(${AminoTheme.textDark});
  border: var(${AminoTheme.border});
  background: var(${AminoTheme.inputBackground});

  &:hover {
    background: var(${AminoTheme.hoverColor});
  }
`;

const Icon = styled(AminoButton)`
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

const Danger = styled(AminoButton)`
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

type Props = {
  intent?: "primary" | "danger" | "icon" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  loadingText?: string;
  tabIndex?: number;
  tooltip?: ReactNode;
};

export const Button: React.FC<Props> = ({
  disabled,
  children,
  intent,
  loading,
  onClick,
  className,
  loadingText,
  tabIndex,
  tooltip
}) => {
  const content = loading ? (
    <>
      <Spinner size={16} />
      {loadingText}
    </>
  ) : (
    <>
      {tooltip && <ReactTooltip />}
      {children}
    </>
  );

  if (disabled || loading) {
    return <Secondary disabled>{content}</Secondary>;
  }

  const buttonProps = {
    onClick,
    className,
    "data-tip": tooltip,
    tabIndex
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
