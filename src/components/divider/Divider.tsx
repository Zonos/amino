import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const DividerHorizontal = styled.hr`
  margin: ${theme.space4} 0;
  border-color: ${theme.borderColor};
`;

const DividerVertical = styled.hr`
  margin: 0 ${theme.space4};
  height: auto;
  align-self: stretch;
  border-right: solid thin ${theme.borderColor};
`;

type Props = {
  vertical?: boolean;
  className?: string;
};

export const Divider = ({ className, vertical = false }: Props) =>
  vertical ? (
    <DividerVertical className={className} />
  ) : (
    <DividerHorizontal className={className} />
  );
