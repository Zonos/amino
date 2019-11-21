import React from "react";
import styled from "styled-components";

import { Intent } from "../..";

const AminoNotice = styled.aside`
  border-radius: var(--amino-radius);
  border-left: 8px solid var(--amino-gray-light);
  background: var(--amino-gray-lightest);
  color: var(--amino-gray-dark);
  padding: var(--amino-space);
  
  a {
    font-style: italic;
    text-decoration: underline;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  border-left-color: var(--amino-green-base);
  background: var(--amino-green-lightest);
  color: var(--amino-green-dark);
`;

const AminoErrorNotice = styled(AminoNotice)`
  border-left-color: var(--amino-red-base);
  background: var(--amino-red-lightest);
  color: var(--amino-red-dark);
`;

const AminoWarningNotice = styled(AminoNotice)`
  border-left-color: var(--amino-orange-base);
  background: var(--amino-orange-lightest);
  color: var(--amino-orange-dark);
`;

const AminoPrimaryNotice = styled(AminoNotice)`
  border-left-color: var(--amino-blue-base);
  background: var(--amino-blue-lightest);
  color: var(--amino-blue-dark);
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
