import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

const DividerHorizontal = styled.hr`
  margin: ${theme.space24} 0;
  border-color: ${theme.borderColor};
`;

const DividerVertical = styled.hr`
  margin: 0 ${theme.space24};
  height: auto;
  align-self: stretch;
  border-right: solid thin ${theme.borderColor};
`;

type Props = BaseProps & {
  vertical?: boolean;
};

export const Divider = ({ className, vertical = false }: Props) =>
  vertical ? (
    <DividerVertical className={className} />
  ) : (
    <DividerHorizontal className={className} />
  );
