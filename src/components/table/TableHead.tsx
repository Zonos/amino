import React, { ReactNode } from 'react';

export type TableHeadProps = {
  children: ReactNode;
  className?: string;
};

export const TableHead = ({ children, className }: TableHeadProps) => {
  return <thead className={className}>{children}</thead>;
};
