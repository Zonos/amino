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
  }

  & :last-child {
    margin-bottom: 0;
  }
`;

const RowStack = styled(AminoStack)`
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: var(--amino-space-quarter);
  }

  & :last-child {
    margin-right: 0;
  }
`;

export enum StackType {
  row,
  column
}

export enum StackAlign {
  start,
  end
}

type Props = {
  type?: StackType;
  align?: StackAlign;
};

export const Stack: React.FC<Props> = ({ align, type, children }) => {
  switch (type) {
    case StackType.column:
      return <ColumnStack align={align || StackAlign.start}>{children}</ColumnStack>;
    case StackType.row:
    default:
      return <RowStack align={align || StackAlign.start}>{children}</RowStack>;
  }
};
