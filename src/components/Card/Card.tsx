import React, { useState } from "react";
import styled from "styled-components";

import { HStack } from "../Stack";
import { Text, TextStyle } from "../Text";
import { Depth, Surface } from "../../primitives";

const CardHeader = styled.header`
  margin: var(--amino-space-negative);
  padding: var(--amino-space);
  display: flex;
  align-items: center;
  margin-bottom: var(--amino-space);
  border-bottom: var(--amino-border);
  height: 65px;
  line-height: 65px;
  user-select: none;

  h4 {
    margin-bottom: 0;
    flex: 1;
  }
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin: var(--amino-space-negative);
  padding: var(--amino-space);
  border-top: var(--amino-border);
  background: var(--amino-surface-color-secondary);
  margin-top: var(--amino-space);
  border-bottom-left-radius: var(--amino-radius-lg);
  border-bottom-right-radius: var(--amino-radius-lg);
`;

type Props = {
  actions?: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  footerActions?: React.ReactNode;
};

export const Card: React.FC<Props> = ({
  actions,
  children,
  className,
  footerActions,
  label
}) => {
  return (
    <Surface depth={Depth.depth4} className={className || ""}>
      {label && (
        <CardHeader>
          <Text style={TextStyle.h4}>{label}</Text>

          {actions && <HStack>{actions}</HStack>}
        </CardHeader>
      )}
      {children}
      {footerActions && (
        <CardFooter>
          <HStack spacing="space-quarter">{footerActions}</HStack>
        </CardFooter>
      )}
    </Surface>
  );
};
