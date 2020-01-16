import React from "react";
import styled from "styled-components";

import { Spinner } from "../Spinner";
import { AminoOnClickHandler } from "../..";

// TODO: strong typing for Styled buttons

const AminoButton = styled.button<any>`
  position: relative;
  outline: none;
  border: 1px solid transparent;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 var(--amino-space);
  border-radius: var(--amino-radius);
  transition: var(--amino-transition);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &:focus {
    outline: none;
  }
  
  &:active {
    box-shadow: var(--amino-shadow-glow);
    border: 1px solid var(--amino-primary-light);
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
  color: var(--amino-text-light);

  &:hover {
    background: var(--amino-primary-dark);
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
  className,
  'data-clipboard-text'
}) => {
  const content = loading ? <Spinner size={16} /> : children;

  if (disabled || loading) {
    return <Secondary disabled>{content}</Secondary>;
  }

  const buttonProps = { onClick: onClick || null, className: className || null };

  switch (intent) {
    case "primary":
      return <Primary {...buttonProps}>{content}</Primary>;
    case "secondary":
    default:
      return <Secondary {...buttonProps}>{content}</Secondary>;
  }
};
