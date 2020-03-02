import React from "react";
import styled from "styled-components";

import { Spinner } from "../Spinner";
import { AminoOnClickHandler } from "../..";

// TODO: strong typing for Styled buttons

const AminoButton = styled.button<any>`
  position: relative;
  outline: none;
  border: 1px solid transparent;
  height: 40px;
  line-height: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 var(--amino-space);
  border-radius: var(--amino-radius);
  transition: var(--amino-transition);
  box-shadow: var(--amino-shadow-top);
  font-weight: 500;
  user-select: none;
  font-family: var(--amino-font-sans);
  letter-spacing: normal;

  &:focus {
    outline: none;
  }
  
  &:active {
    border: 2px solid var(--amino-primary);
    padding: 0 calc(var(--amino-space) - 1px);
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    background: var(--amino-gray-lightest);
    box-shadow: none;
  }
`;

const Primary = styled(AminoButton)<any>`
  background: var(--amino-primary);
  box-shadow: var(--amino-shadow-top-primary);
  color: var(--amino-text-light);

  &:hover {
    background: var(--amino-primary-light);
  }
`;

const Secondary = styled(AminoButton)<any>`
  background: white;
  color: var(--amino-text-dark);
  border: 1px solid var(--amino-border-color);

  &:hover {
    background: var(--amino-gray-lightest);
  }
`;

const Icon = styled(AminoButton)<any>`
  background: white;
  color: var(--amino-text-dark);
  border: 1px solid var(--amino-border-color);
  padding: 0 var(--amino-space-half);
  
  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: var(--amino-gray-lightest);
  }
  
  &:active {
    border: 2px solid var(--amino-primary);
    padding: 0 calc(var(--amino-space-half) - 1px);
  }
`;

const Danger = styled(AminoButton)<any>`
  background: var(--amino-error);
  color: white; 

  &:hover {
    background: var(--amino-red-dark);
  }
`;

// TODO: use Intent enum like old amino, not strings

type Props = {
  intent?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: AminoOnClickHandler;
  className?: string;
};

export const Button: React.FC<Props> = ({
  disabled,
  children,
  intent,
  loading,
  onClick,
  className
}) => {
  const content = loading ? <Spinner size={16} /> : children;

  if (disabled || loading) {
    return <Secondary disabled>{content}</Secondary>;
  }

  const buttonProps = { onClick: onClick || null, className: className || null };

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
