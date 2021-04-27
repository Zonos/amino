import styled from 'styled-components';

import { Card } from 'components/Card';

export const DangerZone = styled(Card)`
  border-color: var(--amino-red-200);
  box-shadow: 0px 1px 5px rgba(255, 0, 0, 0.19);

  header {
    border-color: var(--amino-red-200);
  }

  h4 {
    color: var(--amino-red-500);
  }
`;
