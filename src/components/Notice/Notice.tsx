import React from "react";
import styled from "styled-components";

import { Intent } from "../..";
import { AminoTheme } from "../../styles/AminoTheme";

const AminoNotice = styled.aside`
  border-radius: var(${AminoTheme.radius});
  background: var(${AminoTheme.gray100});
  color: var(${AminoTheme.textColor});
  padding: var(${AminoTheme.space});

  a {
    font-style: italic;
    text-decoration: underline;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  background: var(${AminoTheme.success});
  color: white;
`;

const AminoErrorNotice = styled(AminoNotice)`
  background: var(${AminoTheme.error});
  color: white;
`;

const AminoWarningNotice = styled(AminoNotice)`
  background: var(${AminoTheme.warning});
  color: white;
`;

const AminoPrimaryNotice = styled(AminoNotice)`
  background: var(${AminoTheme.primary});
  color: white;
`;

export type NoticeProps = {
  intent?: Intent;
  children: React.ReactNode;
};

export const Notice = ({ intent, children }: NoticeProps) => {
  switch (intent) {
    case "success":
      return <AminoSuccessNotice>{children}</AminoSuccessNotice>;
    case "error":
      return <AminoErrorNotice>{children}</AminoErrorNotice>;
    case "warning":
      return <AminoWarningNotice>{children}</AminoWarningNotice>;
    case "primary":
      return <AminoPrimaryNotice>{children}</AminoPrimaryNotice>;
    case "info":
    default:
      return <AminoNotice>{children}</AminoNotice>;
  }
};
