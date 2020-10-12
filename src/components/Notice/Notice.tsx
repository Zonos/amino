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

type Props = {
  intent?: Intent;
};

export const Notice: React.FC<Props> = ({ intent, children }) => {
  switch (intent) {
    case Intent.Success:
      return <AminoSuccessNotice>{children}</AminoSuccessNotice>;
    case Intent.Error:
      return <AminoErrorNotice>{children}</AminoErrorNotice>;
    case Intent.Warning:
      return <AminoWarningNotice>{children}</AminoWarningNotice>;
    case Intent.Primary:
      return <AminoPrimaryNotice>{children}</AminoPrimaryNotice>;
    case Intent.Info:
    default:
      return <AminoNotice>{children}</AminoNotice>;
  }
};
