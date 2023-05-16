import type { ReactNode } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div<{ twoColumn?: boolean }>`
  display: grid;
  grid-template-columns: ${({ twoColumn }) =>
    twoColumn
      ? 'repeat(2, minmax(240px, 1fr))'
      : 'repeat(3, minmax(240px, 1fr))'};
  gap: 16px;
  margin-top: 24px;

  > a > div,
  > div {
    height: 100%;
  }

  @media (max-width: 1510px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

export type Props = {
  twoColumn?: boolean;
  children: ReactNode;
};

export const MdxCardGrid = ({ twoColumn, children }: Props) => (
  <Wrapper twoColumn={twoColumn}>{children}</Wrapper>
);
