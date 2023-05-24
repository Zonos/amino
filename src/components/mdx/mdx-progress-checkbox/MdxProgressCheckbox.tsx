import type { ReactNode } from 'react';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import { useStorage } from 'src/utils/hooks/useStorage';
import styled from 'styled-components';

const Label = styled(Text)`
  font-size: ${theme.space16};
`;

const Wrapper = styled.div`
  label {
    /* Align checkbox with list item */
    display: flex;
    align-items: center;
  }
`;

const Description = styled.div`
  margin-left: ${theme.space24};
  margin-top: ${theme.space24};
`;

export type Props = {
  pathname: string;
  checkboxKey: string;
  children?: ReactNode;
  xlabel: string;
};

export const MdxProgressCheckbox = ({
  pathname,
  checkboxKey,
  children,
  xlabel,
}: Props) => {
  if (!checkboxKey) {
    // eslint-disable-next-line no-console
    console.warn(
      `A unique progress checkbox key is required to track progress`
    );
  }
  const pageCheckboxKey = `${pathname}-${checkboxKey}`;
  const [isChecked, setChecked] = useStorage({
    defaultValue: '',
    key: pageCheckboxKey,
    type: 'local',
  });

  return (
    <Wrapper>
      <Checkbox
        checked={!!isChecked}
        labelComponent={<Label type="bold-label">{xlabel}</Label>}
        label={xlabel}
        onChange={() => setChecked(isChecked ? '' : 'checked')}
      />
      <Description>{children}</Description>
    </Wrapper>
  );
};
