import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledCurrency = styled.span`
  font-feature-settings: 'tnum' 1;
  /** Make it not break line */
  white-space: nowrap;
  &.negative {
    color: ${theme.red400};
  }
`;

type Props = {
  children: string | number;
  code: string;
};

export const Currency = ({ children, code }: Props) => {
  const formattedCurrency = new Intl.NumberFormat(`en-US`, {
    currency: code,
  }).format(Number(children));

  return (
    <StyledCurrency className={Number(children) < 0 ? 'negative' : ''}>
      {formattedCurrency} {code.toUpperCase()}
    </StyledCurrency>
  );
};
