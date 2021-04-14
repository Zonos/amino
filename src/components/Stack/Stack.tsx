import React from "react";
import styled from "styled-components";

const AminoStack = styled.div`
  display: flex;
`;

const ColumnStack = styled(AminoStack)`
  flex-direction: column;
  justify-content: center;

  & > * {
    margin-bottom: var(--amino-space-quarter);

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const RowStack = styled(AminoStack)`
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: var(--amino-space-quarter);

    &:last-child {
      margin-right: 0;
    }
  }
`;

const CardStack = styled.div`
  flex-direction: column;

  & > * {
    margin-bottom: var(--amino-space);

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export enum StackType {
  row,
  column,
  cards,
}

type Props = {
  type?: StackType;
};

/**
 * @description Displays children in a organized stack
 * @deprecated Use HStack and VStack instead
 */
export const Stack: React.FC<Props> = ({ type, children }) => {
  switch (type) {
    case StackType.cards:
      return <CardStack>{children}</CardStack>;
    case StackType.column:
      return <ColumnStack>{children}</ColumnStack>;
    case StackType.row:
    default:
      return <RowStack>{children}</RowStack>;
  }
};
