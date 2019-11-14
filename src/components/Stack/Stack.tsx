import React from "react";
import styled from "styled-components";

const AminoStack = styled.div`
  display: flex;
`;

const ColumnStack = styled(AminoStack)`
  flex-direction: column;
  justify-content: center;
`;

const RowStack = styled(AminoStack)`
  flex-direction: row;
  align-items: center;
`;

export enum StackType {
  row,
  column
}

type Props = {
  type?: StackType;
};

export const Stack: React.FC<Props> = ({ type, children }) => {
  switch (type) {
    case StackType.column:
      return <ColumnStack>{children}</ColumnStack>;
    case StackType.row:
    default:
      return <RowStack>{children}</RowStack>;
  }
};
