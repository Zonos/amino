import React from "react";

export enum TextStyle {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  code
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
    case TextStyle.p:
    default:
      return <p>{children}</p>;
  }
};
