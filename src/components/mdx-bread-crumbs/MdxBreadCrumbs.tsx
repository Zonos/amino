import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledBreadcrumbs = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 0 16px;

  > a,
  span {
    color: ${theme.gray800};
    border-bottom: 0px solid #fff;
    margin: 0 3px 0 5px;
    :hover {
      opacity: 0.9;
    }
  }
  a:first-of-type {
    margin-left: 0;
  }
  span:last-of-type {
    color: ${theme.gray300};
  }
`;

export type Props = {
  children: ReactNode;
};

export const MdxBreadCrumbs = ({ children }: Props) => (
  <StyledBreadcrumbs>{children}</StyledBreadcrumbs>
);
