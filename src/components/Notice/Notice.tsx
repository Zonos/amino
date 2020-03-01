import React from "react";
import styled from "styled-components";

import { Intent } from "../..";

const AminoNotice = styled.aside`
  border-radius: var(--amino-radius-large);
  background: var(--amino-gray-lightest);
  color: var(--amino-text-color);
  padding: var(--amino-space);
  box-shadow: var(--amino-shadow-soft);
  border: 1px solid var(--amino-border-color);
  
  a {
    font-style: italic;
    text-decoration: underline;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  background: var(--amino-green-base);
  color: white;
  border: 0;
`;

const AminoErrorNotice = styled(AminoNotice)`
  background: var(--amino-red-base);
  color: white;
  border: 0;
`;

const AminoWarningNotice = styled(AminoNotice)`
  background: var(--amino-orange-base);
  color: white;
  border: 0;
`;

const AminoPrimaryNotice = styled(AminoNotice)`
  background: var(--amino-blue-base);
  color: white;
  border: 0;
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
