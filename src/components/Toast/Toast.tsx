import React from "react";
import styled from "styled-components";

const AminoToast = styled.div`
  background: black;
  position: fixed;
  left: 50%;
  bottom: var(--amino-space-double);
  z-index: 999999;
`;

type Props = {
  text: string;
};

export const Toast: React.FC<Props> = ({ text }) => {
  return <AminoToast>{text}</AminoToast>;
};
