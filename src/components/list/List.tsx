import styled from 'styled-components';

export const List = styled.section`
  margin: var(--amino-space-negative);
  margin-top: 0;

  & > div {
    border-bottom: var(--amino-border);
  }

  & > div:last-of-type {
    border-bottom: 0;
    border-bottom-left-radius: var(--amino-radius-lg);
    border-bottom-right-radius: var(--amino-radius-lg);
  }
`;
