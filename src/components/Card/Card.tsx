import React, { useState } from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";
import { Button } from "../Button";
import { AminoOnSaveHandler } from "../..";

// TODO: figure out a way to handle form + validation for inner elements when onSave is called

const AminoCard = styled.div`
  background: white;
  padding: var(--amino-space);
  border-radius: var(--amino-radius-large);
  box-shadow: var(--amino-shadow-medium);
`;

const CardHeader = styled.header`
  margin: var(--amino-space-negative);
  padding: var(--amino-space);
  display: flex;
  align-items: center;
  padding-bottom: 0;
  margin-bottom: var(--amino-space-half);

  h4 {
    margin-bottom: 0;
    flex: 1;
  }
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin: var(--amino-space-negative);
  padding: var(--amino-space-half) var(--amino-space);
  border-top: 1px solid var(--amino-border-color);
  background: var(--amino-gray-lightest);
  margin-top: var(--amino-space);
  border-bottom-left-radius: var(--amino-radius-large);
  border-bottom-right-radius: var(--amino-radius-large);
`;

type Props = {
  label?: string;
  actions?: Array<React.ReactNode>;
  onSave?: AminoOnSaveHandler;
  className?: string;
};

export const Card: React.FC<Props> = ({
  children,
  label,
  onSave,
  className
}) => {
  const [saving, setSaving] = useState(false);

  const save = async () => {
    if (!onSave) {
      return;
    }

    setSaving(true);

    // TODO: set saving
    try {
      await onSave();
      // alert("Successful");
      // TODO: notify
    } catch (e) {
      // TODO: notify
      // alert("Not successful");
    }

    setSaving(false);
    // TODO: unset saving
  };

  return (
    <AminoCard className={className || ""}>
      {label && (
        <CardHeader>
          <Text style={TextStyle.h4}>{label}</Text>
        </CardHeader>
      )}
      {children}
      {onSave && (
        <CardFooter>
          <Button loading={saving} intent="primary" onClick={save}>
            Save
          </Button>
        </CardFooter>
      )}
    </AminoCard>
  );
};
