import React, { ReactNode } from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";

const AminoListItem = styled.div<any>`
  padding: var(--amino-space-half) var(--amino-space);
  transition: var(--amino-transition);
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    margin-right: var(--amino-space-half);
    width: 32px;
    height: 32px;
    border-radius: var(--amino-radius);
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  h5 {
    margin-bottom: 0;
  }

  &:hover {
    background: ${p => (p.onClick ? "var(--amino-gray-lightest)" : "")};
  }
`;

type Props = {
  label: string;
  subtitle?: string;
  icon?: string;
  rightDecorator?: ReactNode;
  onClick?: any;
};

export const ListItem: React.FC<Props> = ({
  label,
  subtitle,
  icon,
  rightDecorator,
  onClick
}) => {
  return (
    <AminoListItem onClick={onClick && onClick}>
      {icon && <img src={icon} alt={label} />}
      <div>
        <Text style={TextStyle.h5}>{label}</Text>
        {subtitle && <Text style={TextStyle.Subtitle}>{subtitle}</Text>}
      </div>
      {rightDecorator && rightDecorator}
    </AminoListItem>
  );
};
