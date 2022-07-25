import React, { ReactNode } from 'react';

import styled from 'styled-components';

export type TableRowProps = {
  children: ReactNode;
  className?: string;
};

export const TableRow = ({ children, className }: TableRowProps) => {
  return <tr className={className}>{children}</tr>;
};
