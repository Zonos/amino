import { Card } from 'src/components/card/Card';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export const DangerZone = styled(Card)`
  border-color: ${theme.redL60};
  box-shadow: 0px 1px 5px rgba(255, 0, 0, 0.19);

  header {
    border-color: ${theme.redL60};
  }

  h4 {
    color: ${theme.redBase};
  }
`;
