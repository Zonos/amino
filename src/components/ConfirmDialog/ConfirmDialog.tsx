import React from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";
import { IAminoTheme, Intent } from "../../types";

import { BaseDialog } from "../Dialog/BaseDialog";
import { Button } from "../Button";
import { RoundedIcon } from "../RoundedIcon";
import { VStack } from "../Stack";

const Content = styled.div`
  padding: var(--amino-space);

  & > div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: var(--amino-space);

  & > button + button {
    margin-left: var(--amino-space-quarter);
  }

  button {
    flex: 1;
  }
`;

const ConfirmationPrompt = styled.span`
  opacity: 0.5;
  font-weight: 500;
`;

export type ConfirmDialogProps = {
  open: boolean;
  label: string;
  theme?: IAminoTheme;
  subtitle: React.ReactNode;
  intent: Intent;
  confirmText: string;
  dismissText: string;
  confirmAction: () => void;
  dismissAction: () => void;
};

const getIconForIntent = (intent: Intent) => {
  switch (intent) {
    case "danger":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "info":
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
      );
  }
};

export const ConfirmDialog = ({
  theme,
  open,
  label,
  intent,
  subtitle,
  confirmText,
  dismissText,
  confirmAction,
  dismissAction,
}: ConfirmDialogProps) => (
  <BaseDialog width={350} data-theme={theme} open={open}>
    <Content>
      <VStack spacing="space-half">
        <RoundedIcon intent={intent}>{getIconForIntent(intent)}</RoundedIcon>
        <div>
          <Text style={TextStyle.h4}>{label}</Text>
          <ConfirmationPrompt>{subtitle}</ConfirmationPrompt>
        </div>
        <Footer>
          <Button onClick={dismissAction}>{dismissText}</Button>
          <Button onClick={confirmAction} intent={intent}>
            {confirmText}
          </Button>
        </Footer>
      </VStack>
    </Content>
  </BaseDialog>
);
