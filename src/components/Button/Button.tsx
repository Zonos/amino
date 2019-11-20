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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 var(--amino-space);
  border-radius: var(--amino-radius);
  transition: var(--amino-transition);

  &:focus {
    outline: none;
  }
  
  &:active {
    box-shadow: var(--amino-shadow-glow);
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    background: var(--amino-gray-lightest);
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
  border: 1px solid var(--amino-gray-light);

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
};

export const Button: React.FC<Props> = ({
  disabled,
  children,
  intent,
  loading,
  onClick
}) => {
  const content = loading ? <Spinner size={16} /> : children;

  if (disabled || loading) {
    return <Secondary disabled>{content}</Secondary>;
  }

  const buttonProps = { onClick: onClick || null };

  switch (intent) {
    case "primary":
      return <Primary {...buttonProps}>{content}</Primary>;
    case "secondary":
    default:
      return <Secondary {...buttonProps}>{content}</Secondary>;
  }
};
