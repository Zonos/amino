import React from "react";
import styled from "styled-components";

import { Intent } from "../..";

const AminoNotice = styled.aside`
  border-radius: var(--amino-radius);
  background: var(--amino-gray-400);
  color: var(--amino-text-color);
  padding: var(--amino-space);

  a {
    font-style: italic;
    text-decoration: underline;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  background: var(--amino-success);
  color: white;
`;

const AminoErrorNotice = styled(AminoNotice)`
  background: var(--amino-error);
  color: white;
`;

const AminoWarningNotice = styled(AminoNotice)`
  background: var(--amino-warning);
  color: white;
`;

const AminoPrimaryNotice = styled(AminoNotice)`
  background: var(--amino-primary);
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
