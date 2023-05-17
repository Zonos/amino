import type { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledBreadcrumbs = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 0 16px;

  > a,
  span {
    color: ${theme.gray800};
    border-bottom: none;
    margin: 0 3px 0 5px;
    :hover {
      opacity: 0.9;
    }
    :after {
      content: '/';
      color: ${theme.gray500};
      margin-left: 8px;
    }
  }
  a:first-of-type {
    margin-left: 0;
  }
  span:last-of-type {
    color: ${theme.gray300};
    :after {
      content: none;
    }
  }
`;

export type Props = {
  children: ReactNode;
  className?: string;
};

export const MdxBreadCrumbs = ({ children, className }: Props) => (
  <StyledBreadcrumbs className={className}>{children}</StyledBreadcrumbs>
);
