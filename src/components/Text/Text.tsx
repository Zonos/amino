import React from "react";
import styled from "styled-components";

const Subtitle = styled.span`
  opacity: .7;
  font-style: italic;
`;

const SmallHeader = styled.span`
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.5;
`;

const InputLabel = styled.h5`
  font-family: var(--amino-font-sans);
  margin-bottom: 0.625rem;
  font-size: 1rem;
  font-weight: 400;
  opacity: .5.;
`;

export enum TextStyle {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  Code,
  Subtitle,
  SmallHeader,
  InputLabel
}

type Props = {
  style?: TextStyle;
};

export const Text: React.FC<Props> = ({ children, style }) => {
  switch (style) {
    case TextStyle.h1:
      return <h1>{children}</h1>;
    case TextStyle.h2:
      return <h2>{children}</h2>;
    case TextStyle.h3:
      return <h3>{children}</h3>;
    case TextStyle.h4:
      return <h4>{children}</h4>;
    case TextStyle.h5:
      return <h5>{children}</h5>;
    case TextStyle.h6:
      return <h6>{children}</h6>;
    case TextStyle.Subtitle:
      return <Subtitle>{children}</Subtitle>;
    case TextStyle.SmallHeader:
      return <SmallHeader>{children}</SmallHeader>;
    case TextStyle.InputLabel:
      return <InputLabel>{children}</InputLabel>;
    case TextStyle.p:
    default:
      return <p>{children}</p>;
  }
};
