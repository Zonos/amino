import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  margin-top: 16px;

  table {
    width: 100%;
    background: ${theme.gray0};
    border-radius: 10px;
    font-size: 14px;
    border: 1px solid ${theme.gray200};
    border-collapse: unset;
    border-spacing: 0;
    margin-bottom: ${theme.space16};
    box-sizing: border-box;
  }

  thead strong {
    color: ${theme.gray900};
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  tbody {
    border-radius: 10px;
  }

  tr:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  th:first-of-type {
    border-top-left-radius: 10px;
  }

  th:last-of-type {
    border-top-right-radius: 10px;
  }

  th {
    text-align: left;
    font-weight: normal;
    width: fit-content;
  }

  td,
  th {
    min-width: 80px;
    border-bottom: 1px solid ${theme.gray200};
  }
  tr:last-of-type td {
    border-bottom: 0;
  }

  tr:last-of-type {
    border-bottom: 0;
  }

  .numberingColumn {
    padding: 10px 20px;
  }

  hr {
    border: 0;
    border-bottom: 1px solid ${theme.gray200};
    margin: 32px 0;
  }

  table td,
  table th {
    span {
      display: inline-block;
    }
    vertical-align: top;
    padding: 10px 20px;
    margin: 0;
  }

  > table {
    border: none;

    tbody {
      tr {
        &:first-of-type > td {
          border-top: 1px solid ${theme.gray200};
          &:first-of-type {
            border-top-left-radius: 12px;
          }
          &:last-of-type {
            border-top-right-radius: 12px;
          }
        }

        &:last-of-type > td {
          border-bottom: 1px solid ${theme.gray200};
          &:first-of-type {
            border-bottom-left-radius: 12px;
          }
          &:last-of-type {
            border-bottom-right-radius: 12px;
          }
        }

        > td:first-of-type {
          border-left: 1px solid ${theme.gray200};
        }
        > td:last-of-type {
          border-right: 1px solid ${theme.gray200};
        }
      }
    }

    thead > tr > th {
      border: none;
    }
  }
`;

export const MdxTable = ({ children }: { children?: ReactNode }) => (
  <Wrapper>
    <table>{children}</table>
  </Wrapper>
);
