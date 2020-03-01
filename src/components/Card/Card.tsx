import React, { useState } from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";
import { Button } from "../Button";
import { AminoOnSaveHandler } from "../..";
import { Stack, StackType } from "../Stack";
import { Depth, Surface } from "../../primitives";

// TODO: figure out a way to handle form + validation for inner elements when onSave is called

const CardHeader = styled.header`
  margin: var(--amino-space-negative);
  padding: var(--amino-space);
  display: flex;
  align-items: center;
  //padding-bottom: 0;
  margin-bottom: var(--amino-space);
  border-bottom: 1px solid var(--amino-border-color);

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
  border-top: 1px solid var(--amino-border-color);
  background: var(--amino-gray-lighter);
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
  className,
  actions
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
    <Surface depth={Depth.depth4} className={className || ""}>
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
      {!onSave && actions && (
        <CardFooter>
          <Stack type={StackType.row}>
            {actions.map((action: any, index: number) => (
              <div key={index}>{action}</div>
            ))}
          </Stack>
        </CardFooter>
      )}
    </Surface>
  );
};
