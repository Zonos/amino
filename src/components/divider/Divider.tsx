import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

type StyledProps = {
  outset: boolean;
};

const DividerHorizontal = styled.hr<StyledProps>`
  margin: ${theme.space24} ${p => (p.outset ? theme.spaceNegative24 : 0)};
  border-color: ${theme.borderColor};
`;

const DividerVertical = styled.hr<StyledProps>`
  margin: ${p => (p.outset ? theme.spaceNegative24 : 0)} ${theme.space24};
  height: auto;
  align-self: stretch;
  border-right: solid thin ${theme.borderColor};
`;

type Props = {
  className?: string;
  vertical?: boolean;
  /**
   * Adds negative margin (-24px) in the non-primary direction. For use with Cards and other containers with padding.
   * @default false
   */
  outset?: boolean;
};

export const Divider = ({
  className,
  vertical = false,
  outset = false,
}: Props) =>
  vertical ? (
    <DividerVertical className={className} outset={outset} />
  ) : (
    <DividerHorizontal className={className} outset={outset} />
  );
