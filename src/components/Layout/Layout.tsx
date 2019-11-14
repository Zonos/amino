import React from "react";
import styled from "styled-components";

const AminoLayout = styled.div`
  background: var(--amino-gray-lightest);
  height: 100%;
  width: 100%;
  
  // TODO: only for testing
  padding: 50px;
`;

export const Layout: React.FC = props => {
  return <AminoLayout>{props.children}</AminoLayout>;
};
